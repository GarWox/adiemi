# Promociones Adiemi - eCommerce

## Listado de Entidades

### usuarios **(ED)**

- usuario_id **(PK)**
- tipo_usuario **(FK)**
- nombre
- apellido
- email **(UQ)**
- cedula **(UQ)**
- telefono **(UQ)**
- direccion
- fecha_registro
- password_hash

### tipos_usuario **(EC)**

- tipo_id **(PK)**
- tipo_usuario

### productos **(ED | EC)**

- producto_id **(PK)**
- producto_nombre
- precio
- stock
- categoria **(FK)**
- foto
- descripcion

### promociones **(EC)**

- promocion_id **(PK)**
- promocion_nombre

### productos_x_promocion **(EP | ED)**

- promocion_id **(FK)**
- producto_id **(FK)**

### categorias **(EC)**

- categoria_id **(PK)**
- categoria_nombre

### pedido **(ED)**

- pedido_id **(PK)**
- usuario_id **(FK)**
- fecha_pedido
- estado
- metodo_pago_id **(FK)**
- total

### pedido_linea **(EP)**

- pedido_id **(FK)**
- producto_id **(FK)**
- cantidad
- subtotal

### metodos_pago **(EC)**

- metodo_pago_id **(PK)**
- metodo_pago

## Relaciones

1. usuario (1) -> pedido (0-N).
1. promocion (1) -> productos (N).
1. pedido (1) -> productos (N).
1. pedido (1) -> pedido_linea (N).
1. pedido (N) -> método de pago (1).
1. pedido (N) -> estado de pago (1).
1. producto (N) -> categoria (1).
1. usuario (N) -> tipo de usuario (1).

## Reglas de negocio

### usuarios

#### admin:

1. Crear usuario
1. Leer usuario.
1. Leer todos los usuarios.
1. Actualizar tipo de usuario.
1. Eliminar usuario.

#### usuario (vendedor/gerente/asesor)

1. Crear usuario.
1. Leer usuario.
1. Actualizar usuario
1. Eliminar usuario

### tipos_usuario

#### admin:

1. Crear tipo de usuario.
1. Leer tipo de usuario.
1. Actualizar tipo de usuario.

#### usuario (vendedor/gerente/asesor)

1. Leer tipo de usuario.

### productos

#### admin:

1. Crear producto.
1. Leer producto.
1. Leer todos los productos.
1. Actualizar producto
1. Eliminar producto.

#### usuario:

1. Leer producto.
1. Leer todos los productos.

### promociones

#### admin:

1. Crear promocion.
1. Leer promocion.
1. Actualizar promocion.
1. Eliminar promocion.

#### usuario:

1. Leer promocion.

### productos_x_promocion

#### admin:

1. Crear producto por promocion.
1. Leer producto por promocion.
1. Actualizar producto por promocion.
1. Eliminar producto por promocion.

#### usuario:

1. Leer producto por promocion

### categorias

#### admin:

1. Crear categoria.
1. Leer categoria.
1. Actualizar categoria.
1. Eliminar categoria.

#### usuario:

1. Leer categoria

### pedido

1. Crear pedido.
1. Leer pedido.
1. Actualizar pedido.
1. Eliminar pedido.

### pedido_linea

1. Crear linea de pedido.
1. Leer linea de pedido.
1. Actualizar linea de pedido.
1. Eliminar linea de pedido.

### metodos_pago

1. Crear metodo de pago.
1. Leer metodo de pago.
1. Actualizar metodo de pago.
1. Eliminar metodo de pago.
