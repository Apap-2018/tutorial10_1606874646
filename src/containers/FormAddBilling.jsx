import React from 'react';

const poliRujukan = {
    1: 'Poli Penyakit Dalam',
    2: 'Poli Mata',
    3: 'Poli Saraf',
    4: 'Poli THT',
    5: 'Poli Gigi dan Mulut',
    6: 'Poli Konsultasi Gizi',
    7: 'Poli Fisioterapi',
    8: 'Poli Penyakit Dalam'
}

const statusPasien = {
    1: 'Mendaftar di IGD',
    2: 'Berada di IGD',
    3: 'Selesai di IGD',
    4: 'Mendaftar di Rawat Inap',
    5: 'Berada di Rawat Inap',
    6: 'Selesai di Rawat Inap',
    7: 'Mendaftar di Rawat Jalan',
    8: 'Berada di Rawat Jalan',
    9: 'Selesai di Rawat Jalan'
}

export const FormAddBilling = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
             <h2>Add Billing Pasien</h2>
            <input type="hidden" name="id" value={props.billing.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.billing.pasien.nama} readOnly/>
</div>
            
            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan"/>
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan"/>
            </div>

            <button className="btn btn-success" value="submit">Add</button>
        </form>
    )
}