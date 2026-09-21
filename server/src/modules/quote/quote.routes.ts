import { Router } from 'express';import { submitQuote } from './quote.controller.js';export const quoteRouter=Router().post('/',submitQuote);
