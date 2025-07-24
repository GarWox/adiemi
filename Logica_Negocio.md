# Promociones Adiemi - eCommerce

## Listado de Entidades

### usuarios **(ED)**

- usuario_id **(PK)**
- nombre
- apellido
- cedula **(UQ)**
- telefono **(UQ)**
- password_hash
- tipo_usuario **(FK)**
- email **(UQ)** (opcional)
- historial_pedidos **(FK)**
- direccion
- fecha_registro

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
1. pedido (N) -> método de pago (1).
1. producto (N) -> categoria (1).
1. usuario (N) -> tipo de usuario (1).

## Reglas de negocio
