# Promociones Adiemi - E-Commerce

## Listado de Entidades

### usuarios **(ED)**

- usuario_id **(PK)**
- nombre
- apellido
- cedula
- telefono **(UQ)**
- password_hash
- tipo_usuario **(FK)**
- email **(UQ)** (opcional)
- direccion
- codigo_postal
- ciudad

### tipos_usuario **(EC)**

- tipo_id **(PK)**
- tipo_usuario

### productos **(ED | EC)**

- producto_id **(PK)**
- producto_nombre
- precio
- stock
- categoria **(FK)**
- promocion **(FK)**
- foto
- descripcion

### promociones **(EC)**

- promocion_id **(PK)**
- promocion_nombre
- productos **(FK)**

### productos_x_promocion **(EP | ED)**

- promocion_id
- producto_id

### categorias **(EC)**

- categoria_id **(PK)**
- categoria_nombre

### carrito **(EP)**

- usuario_id **(PK)**

### carrito_productos **(EP)**

- carrito_id **(FK)**
- producto_id **(FK)**
- cantidad

### venta **(ED)**

- venta_id **(PK)**
- cliente_id **(FK)**
- fecha
- monto

### historial_pedidos **(ED)**

- usuario_id

### metodos_pago **(EC)**

- metodo_pago_id **(PK)**
- metodo_pago

## Relaciones

## Reglas de negocio
