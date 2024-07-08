<script setup>

</script>

<template>
    <div>
        <h1>Daftar Siswa</h1>
    </div>
    <div class="container">
        <div class="foto">
            <img src="https://via.placeholder.com/150" alt="gambar">
        </div>
        <div>
            <table>
                <tr>
                    <th>Nama</th>
                    <td>:</td>
                    <td>Yatsnil Fahri Murobbi Fathullah</td>
                </tr>
                <tr>
                    <th>Kelas</th>
                    <td>:</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th>Alamat</th>
                    <td>:</td>
                    <td>Curahrejo Cangkring Jenggawah Jember</td>
                </tr>
                <tr>
                    <th>Tanggal Lahir</th>
                    <td>:</td>
                    <td>11 Februari 2004</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    gap: 10px;
    border-bottom: 1px solid black;
    margin-top: 10px;
}

.foto {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: -1px;
    margin-left: 30px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,td {
    text-align: left;
    padding-top: 0px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 10px;
    text-transform: uppercase;
}
</style>