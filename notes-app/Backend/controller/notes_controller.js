import { query } from '../database/notes_db.js';

// Create Notes
export const createNotes = async (req, res) => {
    const { title, datetime, note } = req.body

    if (!title || !datetime || !note) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' })
    }

    try {
        const results = await query(`insert into notes (title, datetime, note) values (?, ?, ?)`, [
            title, datetime, note
        ]);
        return res.status(200).json({ success: true, data: { id: results.insertId, title, datetime, note } });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Get All Notes
export const getAllNotes = async (req, res) => {
    try {
        const results = await query(`select * from notes`);
        return res.status(200).json({ success: true, data: results });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Get Notes By Id
export const getNoteById = async (req, res) => {
    const { id } = req.params

    try {
        const results = await query(`select * from notes where id = ?`, [id])
        if (results.length === 0) {
            return res.status(404).json({ success: false, msg: 'Notes tidak ditemukan' });
        }

        const note = results[0];

        return res.status(200).json({ success: true, data: note });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Update Notes
export const updateNotes = async (req, res) => {
    const { id } = req.params
    const { title, datetime, note } = req.body

    if (!title || !datetime || !note) {
        return res.status(400).json({ msg: 'Field tidak boleh kosong' });
    }

    try {
        const results = await query(`update notes set title = ?, datetime = ?, note = ? where id = ?`, [title, datetime, note, id]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ success: false, msg: 'Notes tidak ditemukan' });
        }
        return res.status(200).json({ success: true, data: { id, title, datetime, note } });

    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ success: false, msg: 'Terjadi kesalahan pada server' });
    }
};

// Delete Notes
export const deleteNotes = async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await query(`select * from notes where id = ?`, [id]);
        if (!results) {
            return res.status(404).json({ msg: 'Notes tidak ditemukan' });
        }

        await query(`delete from notes where id = ?`, [id]);
        return res.status(200).json({ msg: 'Notes berhasil dihapus' });
    } catch (e) {
        console.error('Terjadi kesalahan', e);
        return res.status(500).json({ msg: 'Terjadi kesalahan pada server' })
    }
};