# Tienda / Carrito — Activar las ventas (Stripe)

El carrito ya está **construido** pero **apagado**. Mientras esté apagado, el
sitio muestra "Únete a la lista" y el carrito no aparece. Esto te deja lanzar
las ventas cuando tengas stock, sin tocar el código.

## Cómo funciona

- Los **precios viven en el código** (`lib/products.ts`), no en el cliente —
  Stripe nunca recibe un precio manipulado desde el navegador.
- Al pagar, el sitio crea una **sesión de Stripe Checkout** (página de pago
  hospedada por Stripe) y redirige ahí. No se guardan datos de tarjeta en el sitio.

## Pasos para encender la tienda

### 1. Confirmar el precio de ROCÍO

En `lib/products.ts`, el precio de ROCÍO es un **placeholder** (`price: 49`).
Cámbialo por el precio real antes de vender.

### 2. Crear cuenta de Stripe y obtener la clave

1. Crea una cuenta en [stripe.com](https://stripe.com).
2. Dashboard → **Developers → API keys**.
3. Copia la **Secret key** (`sk_live_...` para producción, `sk_test_...` para pruebas).

### 3. Configurar variables en Vercel

Vercel → tu proyecto → **Settings → Environment Variables**. Añade:

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_COMMERCE_ENABLED` | `true` |
| `STRIPE_SECRET_KEY` | tu `sk_...` |
| `NEXT_PUBLIC_CURRENCY` | `AUD` (o la moneda que elijas) |
| `NEXT_PUBLIC_SITE_URL` | `https://nativa.com.au` (tu dominio) |

Luego **Redeploy** el proyecto para que tome los cambios.

### 4. Probar

- Con `sk_test_...` puedes probar con [tarjetas de prueba de Stripe](https://stripe.com/docs/testing)
  (p. ej. `4242 4242 4242 4242`, fecha futura, cualquier CVC).
- Cuando todo funcione, cambia a la clave `sk_live_...`.

## Apagar de nuevo

Pon `NEXT_PUBLIC_COMMERCE_ENABLED` en `false` (o bórrala) y redeploy. El sitio
vuelve a mostrar "Únete a la lista".

---

### Notas

- **Envío:** el checkout pide dirección de envío para AU, CO y US. Ajusta la
  lista en `app/api/checkout/route.ts` (`allowed_countries`) según a dónde envíes.
- **Impuestos:** para cálculo automático de impuestos, se puede activar Stripe Tax
  más adelante (un ajuste en el mismo archivo).
- **Confirmación de pedido:** Stripe envía el recibo. Para emails de pedido
  personalizados o registro en una hoja, se puede añadir un webhook de Stripe
  cuando lo necesites.
- Los 4 rituales "Próximamente" no tienen precio (`price: null`), así que no se
  pueden añadir al carrito hasta que los definas.
