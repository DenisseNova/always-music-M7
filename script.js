const {Client} = require ('pg');

const config = {
 user: 'postgres',
 host: 'localhost',
 database: 'always-music',
 password: '',
 port: 5432
};

const client = new Client(config);

client.connect(err => {
  if (err) throw err;
  else{
    /*ingresar()
      .then(() => consultar())
      */
    consultar()
  }
});

async function ingresar(){
  const res = await client.query(
    "insert into estudiantes (nombre, rut, curso, nivel) values ('Ana Martinez', '22.473.234-9', 'Tercero', 'A') RETURNING *"
  );
  console.log('registro agregado', res.rows[0]);
  console.log('Cantidad de registros afectados', res.rowCount);
  console.log('Campos de Resgistros: ', res.fields.map((r) => r.name).join(' - ')
  );
  client.end()
}

async function consultarRut(rut){
  const res = await client.query(
    `SELECt * FROM estudiantes WHERE rut='${rut}'`
  );
  console.log('Registros:', res.rows)
}

async function consultar(){
  const res = await client.query(
    'SELECt * FROM estudiantes '
  );
  console.log('Registros:', res.rows)
}



/*
client.connect()
  .then(() => consultar())
  .then(() => client.end());
  */