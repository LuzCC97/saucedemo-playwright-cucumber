Feature: Checkout en Sauce Demo

  Scenario: Completar una compra correctamente
    Given que el usuario ha iniciado sesión con "standard_user" y "secret_sauce"
    And agrega un producto y navega al carrito
    When inicia el proceso de checkout
    And completa sus datos con "Luz", "Chumacero" y "15001"
    And finaliza la compra
    Then debería ver el mensaje de confirmación de compra