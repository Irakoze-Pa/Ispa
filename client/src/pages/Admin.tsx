import { useCallback, useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { FileText, FolderKanban, Inbox, LogOut, RefreshCw, Settings, ShieldCheck } from 'lucide-react';
import { site } from '../config/site';

type AdminUser = { email: string; role: 'admin' | 'editor' };
type Section = 'messages' | 'quotes' | 'blog' | 'projects' | 'services';
type RecordValue = string | number | boolean | null | undefined | string[];
type AdminRecord = Record<string, RecordValue> & { _id?: string; createdAt?: string; updatedAt?: string };

const sections: Array<{ id: Section; label: string; icon: typeof Inbox }> = [
  { id: 'messages', label: 'Messages', icon: Inbox },
  { id: 'quotes', label: 'Quotes', icon: FileText },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'services', label: 'Services', icon: Settings },
];

const tokenKey = 'ispa_admin_token';

async function request<T>(path: string, token?: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${site.apiUrl}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...init?.headers },
  });
  const payload = await response.json().catch(() => ({ message: 'The server returned an unreadable response.' })) as T & { message?: string };
  if (!response.ok) throw new Error(payload.message || 'The request failed.');
  return payload;
}

function displayValue(value: RecordValue) {
  if (Array.isArray(value)) return value.join(', ');
  if (value === null || value === undefined || value === '') return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return String(value);
}

function RecordCard({ record }: { record: AdminRecord }) {
  const preferred = ['name', 'title', 'email', 'company', 'service', 'status', 'message', 'budget', 'createdAt'];
  const keys = [...preferred.filter(key => key in record), ...Object.keys(record).filter(key => !preferred.includes(key) && !['_id', '__v', 'updatedAt'].includes(key))].slice(0, 8);
  const heading = displayValue(record.name || record.title || record.email || 'Record');
  return <article className="admin-record">
    <div className="admin-record-head"><h3>{heading}</h3>{record.status && <span>{displayValue(record.status)}</span>}</div>
    <dl>{keys.filter(key => key !== 'name' && key !== 'title' && key !== 'status').map(key => <div key={key}><dt>{key.replace(/([A-Z])/g, ' $1')}</dt><dd>{displayValue(record[key])}</dd></div>)}</dl>
  </article>;
}

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(tokenKey) || '');
  const [user, setUser] = useState<AdminUser | null>(null);
  const [section, setSection] = useState<Section>('messages');
  const [records, setRecords] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState('');

  const logout = useCallback(() => { localStorage.removeItem(tokenKey); setToken(''); setUser(null); setRecords([]); }, []);
  const loadSection = useCallback(async (nextSection: Section, authToken = token) => {
    setLoading(true); setError('');
    try { setRecords(await request<AdminRecord[]>(`/admin/${nextSection}`, authToken)); }
    catch (cause) { setError(cause instanceof Error ? cause.message : 'Unable to load dashboard data.'); }
    finally { setLoading(false); }
  }, [token]);

  useEffect(() => {
    if (!token) return;
    request<{ user: AdminUser }>('/admin/session', token)
      .then(({ user: activeUser }) => { setUser(activeUser); return loadSection(section, token); })
      .catch(() => logout());
  }, [token, logout, loadSection, section]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError('');
    const data = new FormData(event.currentTarget);
    try {
      const result = await request<{ token: string; user: AdminUser }>('/auth/login', undefined, { method: 'POST', body: JSON.stringify({ email: data.get('email'), password: data.get('password') }) });
      localStorage.setItem(tokenKey, result.token); setToken(result.token); setUser(result.user);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Login failed.'); setLoading(false); }
  }

  if (!token || !user) return <main className="admin-login-shell">
    <section className="admin-login-card">
      <a className="admin-brand" href="/"><span>ISPA</span><small>DIGITAL</small></a>
      <div className="admin-login-icon"><ShieldCheck /></div>
      <p className="eyebrow">SECURE ADMINISTRATION</p><h1>Welcome back.</h1><p>Sign in to manage enquiries and website content.</p>
      <form onSubmit={login} className="admin-login-form">
        <label>Email<input className="field" name="email" type="email" autoComplete="username" required /></label>
        <label>Password<input className="field" name="password" type="password" minLength={12} autoComplete="current-password" required /></label>
        {error && <p className="admin-error" role="alert">{error}</p>}
        <button className="button button-primary" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
      </form>
      <a className="admin-back" href="/">← Back to website</a>
    </section>
  </main>;

  const active = sections.find(item => item.id === section)!;
  return <main className="admin-shell">
    <aside className="admin-sidebar">
      <a className="admin-brand" href="/"><span>ISPA</span><small>DIGITAL</small></a>
      <nav>{sections.map(item => { const Icon = item.icon; return <button className={section === item.id ? 'active' : ''} key={item.id} onClick={() => setSection(item.id)}><Icon size={17}/>{item.label}</button>; })}</nav>
      <button className="admin-logout" onClick={logout}><LogOut size={17}/> Sign out</button>
    </aside>
    <section className="admin-content">
      <header><div><p className="eyebrow">ADMIN DASHBOARD</p><h1>{active.label}</h1><p>Signed in as {user.email}</p></div><button className="admin-refresh" onClick={() => loadSection(section)} disabled={loading}><RefreshCw className={loading ? 'spin' : ''} size={17}/> Refresh</button></header>
      {error && <p className="admin-error" role="alert">{error}</p>}
      {loading ? <div className="admin-empty">Loading {active.label.toLowerCase()}…</div> : records.length ? <div className="admin-records">{records.map((record, index) => <RecordCard key={record._id || index} record={record}/>)}</div> : <div className="admin-empty"><active.icon size={30}/><h2>No {active.label.toLowerCase()} yet</h2><p>New records will appear here automatically.</p></div>}
    </section>
  </main>;
}
