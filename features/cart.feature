Feature: Carrito de compras en Sauce Demo

  Scenario: Agregar un producto al carrito
    Given que el usuario inicia sesión con "standard_user" y "secret_sauce"
    When agrega un producto al carrito
    Then el carrito debería mostrar 1 producto

  Scenario: Visualizar un producto agregado en el carrito
    Given que el usuario inicia sesión con "standard_user" y "secret_sauce"
    When agrega un producto al carrito
    And navega al carrito de compras
    Then debería visualizar el producto en el carrito