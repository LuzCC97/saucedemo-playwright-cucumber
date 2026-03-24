Feature: Login en Sauce Demo

  Scenario: Iniciar sesión correctamente con un usuario válido
    Given que el usuario abre la página de Sauce Demo
    When inicia sesión con el usuario "standard_user" y la contraseña "secret_sauce"
    Then debería ver la página de inventario

  Scenario: Mostrar error cuando las credenciales son inválidas
    Given que el usuario abre la página de Sauce Demo
    When inicia sesión con el usuario "usuario_invalido" y la contraseña "clave_invalida"
    Then debería ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"

  Scenario: Mostrar error cuando el usuario está bloqueado
    Given que el usuario abre la página de Sauce Demo
    When inicia sesión con el usuario "locked_out_user" y la contraseña "secret_sauce"
    Then debería ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."