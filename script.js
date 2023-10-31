const amountEl = document.getElementById("amount")

console.log(amountEl.value)

paypal.Buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: amountEl.value,
                },
            },
        ],
      })
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert("Transaction compleated by " + details.payer.name.given_name)
        })
    },
  }).render('#paypal');