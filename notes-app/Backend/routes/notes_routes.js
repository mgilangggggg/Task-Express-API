import express from 'express';
import { createNotes, getAllNotes, getNoteById, updateNotes, deleteNotes } from '../controller/notes_controller.js';

const router = express.Router();

// Router Notes
router.post('/notes', createNotes);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNoteById);
router.patch('/notes/:id', updateNotes);
router.delete('/notes/:id', deleteNotes);

export default router;
