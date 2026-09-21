import { Router } from 'express';import { submitContact } from './contact.controller.js';export const contactRouter=Router().post('/',submitContact);
