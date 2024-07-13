let arrayCuentas = [
  {
    cbu: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 5100,
    titularCuenta: "pepito",
    estadoDeCuenta: "al dia",
  },
  {
    cbu: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 300,
    titularCuenta: "maria",
    estadoDeCuenta: "con deuda",
  },
  {
    cbu: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2200,
    titularCuenta: "juancito",
    estadoDeCuenta: "al dia",
  },
  {
    cbu: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 500,
    titularCuenta: "carmen",
    estadoDeCuenta: "al dia",
  },
  {
    cbu: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 1200,
    titularCuenta: "Jack",
    estadoDeCuenta: "con deuda",
  },
];

// ANCHOR ---> Debemos crear un objeto llamado banco
// en el cual debemos guardar en una propiedad "clientes" el array
// de cuentas

// ANCHOR ---> agregar un metodo al banco para consultar un cliente en base al cbu

// ANCHOR ---> agregar un metodo al banco para poder realizar depositos
// para ello debemos solicitar en cualquier deposito un cbu y una cantidad

// ANCHOR ---> agregar un metodo la banco para poder realizar extracciones
// para ellos debemos solicitar en cualquier extraccion un cbu y una cantidad

// ANCHOR --> el banco nos píde una nueva feature para poder filtrar todos los usuarios
// que tengan deuda

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (cbu) {
    let clienteEncontrado = this.clientes.find(
      (cliente) => cliente.cbu === cbu
    );
    if (clienteEncontrado !== undefined) {
      return clienteEncontrado;
    } else {
      return "el cliente no fue encontrado";
    }
  },
  deposito: function (cbu, cantidad) {
    let cliente = this.consultarCliente(cbu); // {} -- string
    if (typeof cliente === "object") {
      cliente.saldoEnPesos += cantidad;
      console.log(
        `Deposito realizado con exito el nuevo saldo es ${cliente.saldoEnPesos}`
      );
    } else {
      console.log(cliente);
    }
  },
  extraccion: function (cbu, cantidad) {
    let cliente = this.consultarCliente(cbu);
    if (typeof cliente === "object") {
      if (cliente.saldoEnPesos >= cantidad) {
        cliente.saldoEnPesos -= cantidad;
        console.log(
          `Extraccion realizada con exitos, el saldo final es ${cliente.saldoEnPesos}`
        );
      } else {
        console.log("no tiene saldo");
      }
    } else {
      console.log(cliente);
    }
  },
  filtrarCuentasConDeuda: function () {
    let clienteDeudores = this.clientes.filter(
      (cliente) => cliente.estadoDeCuenta === "con deuda"
    );
    return clienteDeudores;
  },
};

console.log(banco.clientes);

let cbuAconsultar = Number(prompt("ingrese el cbu a consultar"));

let clienteX = banco.consultarCliente(cbuAconsultar);

console.log(clienteX);

banco.deposito(9582019689, 1000);

let juancito = banco.consultarCliente(9582019689);
console.log(juancito);

banco.extraccion(1183971869, 350);

let clientesConDeudaPendiente = banco.filtrarCuentasConDeuda();
console.log(clientesConDeudaPendiente);

// REDUCE Y SORT
// ANCHOR ---> EL DUEÑO DEL BANCO QUIERE SABER EL TOTAL DE LO QUE HAY EN LAS CUENTAS
// ANCHOR ---> ORDENAR EL ARRAY DE MAYOR A MENOR EN BASE AL SALDO
