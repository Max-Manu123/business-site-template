import { useState } from 'react'
import { ArrowRight, CakeSlice, Check, Clock3, Camera, MapPin, Menu, MessageCircle, Minus, Plus, Sparkles, X } from 'lucide-react'

const WHATSAPP = '244953482028'
const whatsapp = (text='Olá! Gostaria de fazer uma encomenda.') =>
  'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text)

const products = [
  {name:'Bolo de Ginguba', price:'Preço de referência • 20.000 Kz', tag:'Mais pedido', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85', desc:'Uma opção especial para aniversários e outras celebrações.'},
  {name:'Red Velvet', price:'Consulte disponibilidade', tag:'Clássico', image:'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=85', desc:'Uma escolha clássica para quem procura um bolo bonito e saboroso.'},
  {name:'Mini bolo de chocolate', price:'Preço de referência • 17.000 Kz / 12 un.', tag:'Para partilhar', image:'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=85', desc:'Mini bolo de chocolate para partilhar ou oferecer.'},
  {name:'Mini pizza', price:'Consulte disponibilidade', tag:'Eventos', image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85', desc:'Salgado ideal para festas, reuniões e eventos.'},
]
const gallery = [
 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85',
 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85',
 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85',
 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=85',
 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=900&q=85',
]

function App() {
  const [menuOpen,setMenuOpen]=useState(false), [selected,setSelected]=useState(null), [faq,setFaq]=useState(null)
  const nav = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMenuOpen(false) }
  return <div className="site">
    <div className="announcement"><Sparkles size={15}/> Proposta de website • Demo <span>•</span> Luanda</div>
    <header className="header"><div className="container nav">
      <button className="brand" onClick={()=>nav('inicio')} aria-label="Pastelaria Esperança Mendes"><span className="brand-mark"><CakeSlice size={19}/></span><span><strong>ESPERANÇA</strong><em>MENDES</em></span></button>
      <nav className={`desktop-nav ${menuOpen?'open':''}`}><button onClick={()=>nav('produtos')}>Produtos</button><button onClick={()=>nav('sobre')}>Sobre nós</button><button onClick={()=>nav('galeria')}>Galeria</button><button onClick={()=>nav('faq')}>Dúvidas</button><a className="nav-cta" href={whatsapp()} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Encomendar</a></nav>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen?<X/>:<Menu/>}</button>
    </div></header>

    <main id="inicio">
      <section className="hero"><div className="hero-bg"></div><div className="container hero-grid">
        <div className="hero-copy"><div className="eyebrow"><span></span> Demonstração de website • Luanda</div><h1>Momentos especiais merecem <i>um sabor</i> especial.</h1><p className="hero-text">Bolos, doces e salgados preparados para aniversários, casamentos, noivados e outros momentos especiais.</p><div className="hero-actions"><a className="btn btn-primary" href={whatsapp('Olá! Vi o site da Pastelaria Esperança Mendes e gostaria de fazer uma encomenda.')} target="_blank" rel="noreferrer">Fazer uma encomenda <ArrowRight size={18}/></a><button className="text-btn" onClick={()=>nav('produtos')}>Ver o menu <ArrowRight size={17}/></button></div></div>
        <div className="hero-visual"><div className="hero-image-wrap"><img src={gallery[0]} alt="Bolo artesanal decorado"/></div><div className="floating-card"><div className="mini-icon"><Check size={16}/></div><div><strong>Preparado para si</strong><span>Consulte disponibilidade</span></div></div><div className="hero-badge"><span>DEMO</span><small>Proposta visual</small></div></div>
      </div></section>

      <section className="stats"><div className="container stats-grid"><div><strong></strong><span>Bolos & doces</span></div><div><strong></strong><span>Atendimento</span></div><div><strong>WhatsApp</strong><span>Contacto direto</span></div><div><strong></strong><span>Sob encomenda</span></div></div></section>

      <section className="section products-section" id="produtos"><div className="container"><div className="section-head"><div><div className="eyebrow">O nosso menu</div><h2>Escolha algo <i>delicioso.</i></h2></div><p>Do primeiro contacto ao último pedaço, cuidamos de cada detalhe. Fale connosco para personalizar o seu pedido.</p></div><div className="product-grid">{products.map(p=><article className="product-card" key={p.name} onClick={()=>setSelected(p)}><div className="product-img"><img src={p.image} alt={p.name}/><span>{p.tag}</span><button aria-label={'Ver '+p.name}><ArrowRight size={18}/></button></div><div className="product-info"><h3>{p.name}</h3><p>{p.desc}</p><strong>{p.price}</strong></div></article>)}</div><div className="center"><a className="btn btn-dark" href={whatsapp('Olá! Gostaria de receber o menu completo da Pastelaria Esperança Mendes.')} target="_blank" rel="noreferrer">Pedir menu completo <ArrowRight size={17}/></a></div></div></section>

      <section className="story" id="sobre"><div className="container story-grid"><div className="story-images"><img className="story-main" src={gallery[2]} alt="Doces artesanais"/><img className="story-small" src={gallery[4]} alt="Cupcakes artesanais"/><div className="story-note"><Sparkles size={19}/><span>Pequenos detalhes.<br/><b>Grandes memórias.</b></span></div></div><div className="story-copy"><div className="eyebrow">Sobre esta demonstração</div><h2>Uma presença online<br/><i>mais organizada.</i></h2><p>Esta página foi criada como uma proposta visual de como a Pastelaria Esperança Mendes poderia apresentar os seus produtos e facilitar o contacto com novos clientes.</p><p>Na versão final, textos, fotos, preços, horários, localização e formas de encomenda podem ser ajustados com as informações oficiais da pastelaria.</p><div className="checks"><div><Check size={16}/> Produtos em destaque</div><div><Check size={16}/> Contacto pelo WhatsApp</div><div><Check size={16}/> Conteúdo personalizável</div></div><a className="text-btn" href={whatsapp('Olá! Gostaria de conhecer melhor a Pastelaria Esperança Mendes.')} target="_blank" rel="noreferrer">Falar connosco <ArrowRight size={17}/></a></div></div></section>

      <section className="section gallery-section" id="galeria"><div className="container"><div className="section-head center-head"><div><div className="eyebrow">Galeria de demonstração</div><h2>Uma ideia de como apresentar <i>os seus produtos.</i></h2></div><p>As imagens desta proposta são ilustrativas e podem ser substituídas pelas fotos reais da pastelaria.</p></div><div className="gallery">{gallery.map((src,i)=><div className={'gallery-item '+(i===0?'featured':'')}><img src={src} alt={'Imagem ilustrativa de produto '+(i+1)}/><span>Imagem ilustrativa</span></div>)}</div></div></section>

      <section className="process"><div className="container"><div className="process-head"><div className="eyebrow">Simples e sem complicações</div><h2>Do seu desejo à <i>sua mesa.</i></h2></div><div className="steps">{[['01','Escolha','Diga-nos o que pretende ou envie uma referência.'],['02','Personalize','Combinamos tamanho, sabor, cores e todos os detalhes.'],['03','Confirme','Receba o orçamento e confirme a sua encomenda.'],['04','Finalização','Esta etapa pode ser ajustada ao processo real da pastelaria.']].map(s=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}</div></div></section>

      

      <section className="faq section" id="faq"><div className="container faq-grid"><div><div className="eyebrow">Perguntas frequentes</div><h2>Tudo o que precisa<br/>de <i>saber.</i></h2><p>Ainda ficou com alguma dúvida? Envie-nos uma mensagem e respondemos diretamente.</p><a className="text-btn" href={whatsapp('Olá! Tenho uma dúvida sobre uma encomenda.')} target="_blank" rel="noreferrer">Perguntar no WhatsApp <ArrowRight size={17}/></a></div><div className="faq-list">{[['Com quanto tempo devo fazer a encomenda?','Esta informação pode ser definida na versão final de acordo com o prazo real de produção da pastelaria.'],['Posso enviar uma imagem de referência?','Esta opção pode ser incluída na versão final, caso a pastelaria aceite imagens de referência.'],['Fazem entregas em Luanda?','As zonas de entrega e respetivos valores podem ser informados aqui na versão final.'],['Como faço o pagamento?','As formas de pagamento podem ser apresentadas aqui com as informações oficiais da pastelaria.']].map(([q,a],i)=><div className={`faq-item ${faq===i?'active':''}`} key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span>{faq===i?<Minus size={18}/>:<Plus size={18}/>}</button>{faq===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section className="final-cta"><div className="container final-inner"><div><div className="eyebrow">Apresente melhor os seus produtos online</div><h2>Transforme visitas em<br/><i>novas encomendas.</i></h2></div><a className="btn btn-light" href={whatsapp('Olá! Quero fazer uma encomenda para a minha próxima celebração.')} target="_blank" rel="noreferrer">Falar pelo WhatsApp <MessageCircle size={18}/></a></div></section>
    </main>

    <footer className="footer"><div className="container footer-grid"><div><button className="brand footer-brand" onClick={()=>nav('inicio')}><span className="brand-mark"><CakeSlice size={19}/></span><span><strong>ESPERANÇA</strong><em>MENDES</em></span></button><p>Proposta visual para apresentar produtos e facilitar contactos de clientes em Luanda.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Camera size={17}/></a><a href={whatsapp()} aria-label="WhatsApp"><MessageCircle size={17}/></a></div></div><div><h4>Explorar</h4><button onClick={()=>nav('produtos')}>Produtos</button><button onClick={()=>nav('sobre')}>Sobre nós</button><button onClick={()=>nav('galeria')}>Galeria</button></div><div><h4>Visite-nos</h4><span><MapPin size={15}/> Viana, Luanda Sul</span><span><Clock3 size={15}/> Consulte o horário</span></div><div><h4>Contacto</h4><a href={whatsapp()} target="_blank" rel="noreferrer">+244 953 482 028</a><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="container copyright"><span>© 2026 Pastelaria Esperança Mendes • Demonstração não oficial</span><span>Demo visual • Informações sujeitas a confirmação</span></div></footer>

    {selected&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}><X size={19}/></button><img src={selected.image} alt={selected.name}/><div className="modal-body"><span className="tag">{selected.tag}</span><h2>{selected.name}</h2><p>{selected.desc}</p><strong>{selected.price}</strong><a className="btn btn-dark" href={whatsapp('Olá! Gostaria de encomendar: '+selected.name)} target="_blank" rel="noreferrer">Encomendar pelo WhatsApp <ArrowRight size={17}/></a></div></div></div>}
  </div>
}
export default App
