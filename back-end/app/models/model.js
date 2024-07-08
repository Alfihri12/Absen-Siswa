const mongoose = require('mongoose');
const { Schema } = mongoose;

const siswaSchema = new Schema({
    "no": {
        type: Number
    },
    'nama': {
        type: String
    },
    "kelas": {
        type: Number
    },
    "alamat": {
        type: String
    },
    "nilai": {
        type: Number
    }
});
const SiswaSchema = mongoose.model('Siswa', siswaSchema)
module.exports = SiswaSchema;