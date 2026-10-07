import { useState } from 'react'
import { ArrowRight, CakeSlice, Check, Clock3, Camera, MapPin, Menu, MessageCircle, Minus, Plus, Sparkles, Star, X } from 'lucide-react'

const WHATSAPP = '244953482028'
const whatsapp = (text='Olá! Gostaria de fazer uma encomenda.') =>
  'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text)

const products = [
  {name:'Bolo de Ginguba', price:'20.000 Kz', tag:'Mais pedido', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85', desc:'Uma opção especial para aniversários e outras celebrações.'},
  {name:'Red Velvet', price:'Consulte disponibilidade', tag:'Clássico', image:'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=85', desc:'Uma escolha clássica para quem procura um bolo bonito e saboroso.'},
  {name:'Mini bolo de chocolate', price:'17.000 Kz / 12 un.', tag:'Para partilhar', image:'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=85', desc:'Mini bolo de chocolate para partilhar ou oferecer.'},
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
        <div className="hero-copy"><div className="eyebrow"><span></span> Demonstração de website • Luanda</div><h1>Momentos especiais merecem <i>um sabor</i> especial.</h1><p className="hero-text">Bolos, doces e salgados preparados para aniversários, casamentos, noivados e outros momentos especiais.</p><div className="hero-actions"><a className="btn btn-primary" href={whatsapp('Olá! Vi o site da Pastelaria Esperança Mendes e gostaria de fazer uma encomenda.')} target="_blank" rel="noreferrer">Fazer uma encomenda <ArrowRight size={18}/></a><button className="text-btn" onClick={()=>nav('produtos')}>Ver o menu <ArrowRight size={17}/></button></div><div className="trust"><div className="avatars"><span>AM</span><span>JS</span><span>LN</span><span>+</span></div><div><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={13} fill="currentColor"/>)}</div><small>Experiência em bolos e doces para celebrações</small></div></div></div>
        <div className="hero-visual"><div className="hero-image-wrap"><img src={gallery[0]} alt="Bolo artesanal decorado"/></div><div className="floating-card"><div className="mini-icon"><Check size={16}/></div><div><strong>Preparado para si</strong><span>Consulte disponibilidade</span></div></div><div className="hero-badge"><span>4.9</span><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={11} fill="currentColor"/>)}</div><small>demonstração</small></div></div>
      </div></section>

      <section className="stats"><div className="container stats-grid"><div><strong></strong><span>Bolos & doces</span></div><div><strong></strong><span>Atendimento</span></div><div><strong>WhatsApp</strong><span>Contacto direto</span></div><div><strong></strong><span>Sob encomenda</span></div></div></section>

      <section className="section products-section" id="produtos"><div className="container"><div className="section-head"><div><div className="eyebrow">O nosso menu</div><h2>Escolha algo <i>delicioso.</i></h2></div><p>Do primeiro contacto ao último pedaço, cuidamos de cada detalhe. Fale connosco para personalizar o seu pedido.</p></div><div className="product-grid">{products.map(p=><article className="product-card" key={p.name} onClick={()=>setSelected(p)}><div className="product-img"><img src={p.image} alt={p.name}/><span>{p.tag}</span><button aria-label={'Ver '+p.name}><ArrowRight size={18}/></button></div><div className="product-info"><h3>{p.name}</h3><p>{p.desc}</p><strong>{p.price}</strong></div></article>)}</div><div className="center"><a className="btn btn-dark" href={whatsapp('Olá! Gostaria de receber o menu completo da Pastelaria Esperança Mendes.')} target="_blank" rel="noreferrer">Pedir menu completo <ArrowRight size={17}/></a></div></div></section>

      <section className="story" id="sobre"><div className="container story-grid"><div className="story-images"><img className="story-main" src={gallery[2]} alt="Doces artesanais"/><img className="story-small" src={gallery[4]} alt="Cupcakes artesanais"/><div className="story-note"><Sparkles size={19}/><span>Pequenos detalhes.<br/><b>Grandes memórias.</b></span></div></div><div className="story-copy"><div className="eyebrow">Sobre a pastelaria</div><h2>Mais do que doces.<br/><i>Memórias.</i></h2><p>A Pastelaria Esperança Mendes nasceu de uma paixão simples: transformar ingredientes em momentos que ficam na memória.</p><p>A proposta desta demonstração é apresentar os produtos de forma mais organizada e facilitar o contacto de novos clientes pelo WhatsApp.</p><div className="checks"><div><Check size={16}/> Ingredientes selecionados</div><div><Check size={16}/> Personalização completa</div><div><Check size={16}/> Produção artesanal</div></div><a className="text-btn" href={whatsapp('Olá! Gostaria de conhecer melhor a Pastelaria Esperança Mendes.')} target="_blank" rel="noreferrer">Falar connosco <ArrowRight size={17}/></a></div></div></section>

      <section className="section gallery-section" id="galeria"><div className="container"><div className="section-head center-head"><div><div className="eyebrow">Feito para ser partilhado</div><h2>Alguns dos nossos <i>favoritos.</i></h2></div><p>Inspire-se para a próxima celebração.</p></div><div className="gallery">{gallery.map((src,i)=><img key={src} src={src} alt={'Criação Pastelaria Esperança Mendes '+(i+1)} className={i===0?'featured':''}/>)}</div></div></section>

      <section className="process"><div className="container"><div className="process-head"><div className="eyebrow">Simples e sem complicações</div><h2>Do seu desejo à <i>sua mesa.</i></h2></div><div className="steps">{[['01','Escolha','Diga-nos o que pretende ou envie uma referência.'],['02','Personalize','Combinamos tamanho, sabor, cores e todos os detalhes.'],['03','Confirme','Receba o orçamento e confirme a sua encomenda.'],['04','Celebre','Nós cuidamos do resto. Só precisa aproveitar.']].map(s=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}</div></div></section>

      <section className="testimonial"><div className="container quote"><div className="quote-mark">“</div><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={16} fill="currentColor"/>)}</div><blockquote>Uma demonstração de como um site poderia apresentar os produtos e facilitar encomendas.</blockquote><div className="customer"><span>MS</span><div><strong>Exemplo de cliente</strong><small>Depoimento ilustrativo</small></div></div></div></section>

      <section className="faq section" id="faq"><div className="container faq-grid"><div><div className="eyebrow">Perguntas frequentes</div><h2>Tudo o que precisa<br/>de <i>saber.</i></h2><p>Ainda ficou com alguma dúvida? Envie-nos uma mensagem e respondemos diretamente.</p><a className="text-btn" href={whatsapp('Olá! Tenho uma dúvida sobre uma encomenda.')} target="_blank" rel="noreferrer">Perguntar no WhatsApp <ArrowRight size={17}/></a></div><div className="faq-list">{[['Com quanto tempo devo fazer a encomenda?','Recomendamos 3 a 5 dias de antecedência. Para pedidos maiores ou eventos, fale connosco com mais tempo para garantirmos disponibilidade.'],['Posso enviar uma imagem de referência?','Sim. Adoramos referências! Envie a imagem pelo WhatsApp e diga-nos o que gostaria de adaptar.'],['Fazem entregas em Luanda?','Sim. A entrega pode ser combinada conforme a localização e o tamanho da encomenda. O valor é calculado à parte.'],['Como faço o pagamento?','Depois de confirmar os detalhes, enviamos as instruções de pagamento. Para encomendas personalizadas, poderá ser solicitado um sinal.']].map(([q,a],i)=><div className={`faq-item ${faq===i?'active':''}`} key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>{q}</span>{faq===i?<Minus size={18}/>:<Plus size={18}/>}</button>{faq===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section className="final-cta"><div className="container final-inner"><div><div className="eyebrow">Apresente melhor os seus produtos online</div><h2>Transforme visitas em<br/><i>novas encomendas.</i></h2></div><a className="btn btn-light" href={whatsapp('Olá! Quero fazer uma encomenda para a minha próxima celebração.')} target="_blank" rel="noreferrer">Falar pelo WhatsApp <MessageCircle size={18}/></a></div></section>
    </main>

    <footer className="footer"><div className="container footer-grid"><div><button className="brand footer-brand" onClick={()=>nav('inicio')}><span className="brand-mark"><CakeSlice size={19}/></span><span><strong>ESPERANÇA</strong><em>MENDES</em></span></button><p>Bolos, doces e momentos feitos com carinho em Luanda.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Camera size={17}/></a><a href={whatsapp()} aria-label="WhatsApp"><MessageCircle size={17}/></a></div></div><div><h4>Explorar</h4><button onClick={()=>nav('produtos')}>Produtos</button><button onClick={()=>nav('sobre')}>Sobre nós</button><button onClick={()=>nav('galeria')}>Galeria</button></div><div><h4>Visite-nos</h4><span><MapPin size={15}/> Viana, Luanda Sul</span><span><Clock3 size={15}/> Consulte o horário</span></div><div><h4>Contacto</h4><a href={whatsapp()} target="_blank" rel="noreferrer">+244 953 482 028</a><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="container copyright"><span>© 2026 Pastelaria Esperança Mendes • Demonstração não oficial</span><span>Demo visual • Informações sujeitas a confirmação</span></div></footer>

    {selected&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}><X size={19}/></button><img src={selected.image} alt={selected.name}/><div className="modal-body"><span className="tag">{selected.tag}</span><h2>{selected.name}</h2><p>{selected.desc}</p><strong>{selected.price}</strong><a className="btn btn-dark" href={whatsapp('Olá! Gostaria de encomendar: '+selected.name)} target="_blank" rel="noreferrer">Encomendar pelo WhatsApp <ArrowRight size={17}/></a></div></div></div>}
  </div>
}
export default App
