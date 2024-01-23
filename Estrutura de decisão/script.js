const redLine = require("readline-sync");
const pedido = [];
let open = false;

let contact = parseInt(
  redLine.question(
    "Olá, seja bem vindo ao CoffeeCode!\n\nDeseja olhar nosso cardápio?\n1 - Sim\n2 - Não\n\n"
  )
);

let products = {
  0: new Product("Café", 15.0),
  1: new Product("Leite", 7.35),
  2: new Product("Chá", 12.75),
};

if (contact == 1) {
  open = true;
} else {
  open = false;
}

while (open) {
  escolherProduto();
  contact = parseInt(
    redLine.question("\nDeseja continuar comprando?\n\n1 - Sim\n2 - Não\n\n")
  );
  if (contact == 2) {
    fecharPedido();
    open = false;
    console.log("Volte sempre!");
  } else if (contact != 1 && contact != 2) {
    contact = parseInt(
      redLine.question(
        "\nPor favor, informe o index correto!\n\n1 - Sim\n2 - Não\n\n"
      )
    );
  }
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function escolherProduto() {
  console.log("\nNosso Cardápio!");
  console.table(products);
  contact = parseInt(
    redLine.question(
      "Por favor, escolha um dos nossos produtos com base no index!\n\n"
    )
  );
  pedidos(contact);
}

function pedidos(exp) {
  switch (exp) {
    case 0:
      pedido.push(products[0]);
      break;
    case 1:
      pedido.push(products[1]);
      break;
    case 2:
      pedido.push(products[2]);
      break;
    default:
      console.log(
        "\nPor favor! Escolha somente os produtos mostrados no nosso cardápio!\n"
      );
      escolherProduto();
      break;
  }
}

function fecharPedido() {
  console.log("\nComanda");
  let soma = pedido.reduce(function (total, item) {
    return total + item.price;
  }, 0);
  console.table(pedido);
  console.log("Total a pagar: " + soma.toFixed(2));
  console.log("Por gentileza, pagar no balcão!");
}
