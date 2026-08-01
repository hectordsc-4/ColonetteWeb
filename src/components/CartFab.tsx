import './CartFab.css'

export default function CartFab() {
  return (
    <a href="#productos" className="cart-fab" id="pedido" aria-label="Pedido online">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h2l1.4 9.2a2 2 0 002 1.8h7.8a2 2 0 001.95-1.55L21 8H7"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="20" r="1.4" fill="#fff" />
        <circle cx="17" cy="20" r="1.4" fill="#fff" />
      </svg>
    </a>
  )
}
