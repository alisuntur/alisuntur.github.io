const roles = ["Data Analyst", "Backend Developer", "Business Systems Developer", "ML & Decision Support", "Enterprise Applications"];
let roleIndex = 0, charIndex = 0, deleting = false;
const roleEl = document.getElementById("role-text");
function typeRole(){
  const current = roles[roleIndex];
  roleEl.textContent = deleting ? current.slice(0, --charIndex) : current.slice(0, ++charIndex);
  if(!deleting && charIndex === current.length){deleting=true; setTimeout(typeRole,1200); return;}
  if(deleting && charIndex === 0){deleting=false; roleIndex=(roleIndex+1)%roles.length;}
  setTimeout(typeRole,deleting?38:65);
}
setTimeout(typeRole,400);

const terminalSequence = [
  ["python analyze_profile.py", "→ data mindset: active\\n→ backend systems: active\\n→ enterprise thinking: active"],
  ["git status --short", "✓ portfolio clean\\n✓ projects documented\\n✓ open_to_work = true"],
  ["curl /api/next-opportunity", '{ "status": "ready", "location": "Antalya / Türkiye" }']
];
let seq=0;
function runTerminal(){
  const cmd=document.getElementById('terminal-command'), out=document.getElementById('terminal-output');
  const [text,result]=terminalSequence[seq]; let i=0; cmd.textContent=''; out.textContent='';
  const timer=setInterval(()=>{cmd.textContent=text.slice(0,++i); if(i>=text.length){clearInterval(timer); setTimeout(()=>{out.textContent=result; setTimeout(()=>{seq=(seq+1)%terminalSequence.length;runTerminal()},2300)},350)}},45);
}
setTimeout(runTerminal,800);

const projects = [
  {
    id:'tarimzeka', featured:true, index:'01 / FLAGSHIP · ML + DSS', name:'TarımZeka', status:'MVP / Aktif', statusClass:'',
    summary:'Tarımsal üretim, tüketim, iklim göstergeleri ve çok kriterli karar desteğini birleştiren veri odaklı karar destek platformu.',
    stack:['FastAPI','React 19','PostgreSQL','XGBoost','AHP','Pandas','Flutter'],
    metrics:[['Model','XGBoost'],['Karar desteği','AHP'],['Yapı','Web + Mobile']], repo:'https://github.com/alisuntur/tarimzeka',
    architecture:'React 19 → FastAPI REST API → PostgreSQL\n                    ↓\n              Scoring / AHP\n                    ↓\n       Walk-forward predictions + analytics',
    code:`backend/
  main.py
  scoring.py
  db/repositories.py
frontend/src/
  pages/AiRecommendations.jsx
  pages/RegionalAnalysis.jsx`,
    details:'İl, tarla büyüklüğü ve ürün tercihine göre daha bilinçli ekim kararı vermeyi destekleyen sistem. Tarihsel üretim/verim verilerini, tüketim eğilimlerini, iklim göstergelerini ve XGBoost tabanlı projeksiyonları bir araya getiriyor. Kullanıcı planları ve analiz geçmişleri PostgreSQL üzerinde saklanıyor.',
    disclaimer:'Model performansı ve skorlar proje veri setleri ve backtest yaklaşımı bağlamında değerlendirilmelidir; gerçek dünya sonucu garantisi değildir.',
    images:["assets/projects/tarimzeka/01.png", "assets/projects/tarimzeka/02.png", "assets/projects/tarimzeka/03.png", "assets/projects/tarimzeka/04.png", "assets/projects/tarimzeka/05.png", "assets/projects/tarimzeka/06.png", "assets/projects/tarimzeka/07.png", "assets/projects/tarimzeka/08.png", "assets/projects/tarimzeka/09.png", "assets/projects/tarimzeka/10.png", "assets/projects/tarimzeka/11.png", "assets/projects/tarimzeka/12.png", "assets/projects/tarimzeka/13.png", "assets/projects/tarimzeka/14.png", "assets/projects/tarimzeka/15.png", "assets/projects/tarimzeka/16.png", "assets/projects/tarimzeka/17.png", "assets/projects/tarimzeka/18.png", "assets/projects/tarimzeka/19.png", "assets/projects/tarimzeka/20.png"]
  },
  {
    id:'automation', index:'02 / ENTERPRISE · O&M', name:'Technical Automation O&M', status:'Staj Projesi', statusClass:'',
    summary:'Arıza, bakım, test, vardiya, ekipman geçmişi, raporlama, bildirim ve audit log modüllerine sahip operasyon ve bakım yönetim sistemi.',
    stack:['ASP.NET Core .NET 9','React','TypeScript','PostgreSQL','EF Core','JWT','Docker'],
    metrics:[['Raporlama','Excel + PDF'],['Auth','JWT / RBAC'],['Test','Integration']], repo:'https://github.com/alisuntur/staj-project',
    architecture:'React + TypeScript → apiClient + JWT → ASP.NET Core Web API\n                                      ↓\n                         Controllers → Services → EF Core\n                                      ↓\n                                PostgreSQL\n                                      ↓\n                         Excel / PDF reporting',
    code:`POST /api/faults
PATCH /api/faults/{id}/status
POST /api/maintenance/{id}/complete
GET /api/reports/export
GET /api/audit-logs`,
    details:'Teknik tesis operasyonlarını tek panelde izlenebilir hale getiren kurumsal O&M yönetim sistemi. Arıza yönetimi, varlık ve ekipman geçmişi, planlı bakım, periyodik testler, vardiya devir teslimi, bildirimler, audit log, kullanıcı yönetimi ve Excel/PDF yönetici raporlarını içeriyor.',
    disclaimer:'Gerçek şirket üretim verisi, personel kaydı, operasyonel log, gizli altyapı detayı veya kurum içi bilgi içermez. Gösterilen kayıtlar ve senaryolar demo/temsili veridir.',
    images:["assets/projects/automation/01.png", "assets/projects/automation/02.png", "assets/projects/automation/03.png", "assets/projects/automation/04.png", "assets/projects/automation/05.png", "assets/projects/automation/06.png", "assets/projects/automation/07.png", "assets/projects/automation/08.png", "assets/projects/automation/09.png", "assets/projects/automation/10.png", "assets/projects/automation/11.png", "assets/projects/automation/12.png", "assets/projects/automation/13.png", "assets/projects/automation/14.png", "assets/projects/automation/15.png"]
  },
  {
    id:'airport-analytics', index:'03 / DATA ANALYTICS', name:'Airport IT Ops Analytics', status:'Portfolio', statusClass:'',
    summary:'10.000 sentetik IT ticket üzerinden SLA, olay, departman ve varlık etkisini analiz eden Streamlit dashboard projesi.',
    stack:['Python','Pandas','NumPy','Streamlit','Plotly'],
    metrics:[['Veri','10K sentetik ticket'],['Panel','3 analitik görünüm'],['Amaç','KPI + SLA']], repo:'https://github.com/alisuntur/airport-it-operations-analytics-dashboard',
    architecture:'Synthetic CSV datasets → Pandas validation/filtering → Streamlit pages\n                                          ↓\n                         Plotly charts + KPI cards',
    code:`DATA_PATH = BASE_DIR / "data" / "airport_it_tickets_10000.csv"

filtered_tickets = apply_filters(tickets, selected_filters)

pages = [
  render_overview,
  render_sla_analysis,
  render_department_terminal
]`,
    details:'Havalimanı IT destek operasyonlarına benzeyen bir senaryo üzerinden veri temizleme, KPI tanımlama, filtreleme, SLA analizi ve operasyonel içgörü üretme pratiği için geliştirildi.',
    disclaimer:'Veri seti tamamen sentetiktir. Hiçbir gerçek havalimanının, Fraport TAV’ın veya başka bir şirketin gerçek ticket, SLA, varlık ya da performans verisini temsil etmez.',
    images:["assets/projects/airport-analytics/01.png", "assets/projects/airport-analytics/02.png", "assets/projects/airport-analytics/03.png"]
  },
  {
    id:'inventory', index:'04 / FULL STACK · ERP-LIKE', name:'Halı Sarayı / Inventory Management', status:'MVP', statusClass:'',
    summary:'Halı bayileri için satış, stok, müşteri, tedarikçi, satın alma ve finans süreçlerini tek panelde birleştiren yönetim sistemi.',
    stack:['React','TypeScript','Tailwind','NestJS','TypeORM','PostgreSQL','Docker'],
    metrics:[['Frontend','React + Vite'],['Backend','NestJS'],['DB','PostgreSQL']], repo:'https://github.com/alisuntur/inventory-management-system',
    architecture:'React + TanStack Query → NestJS REST API → TypeORM → PostgreSQL\n                                              ↓\n                                    Redis / PgAdmin',
    code:`GET    /customers
POST   /sales
PATCH  /purchases/:id
GET    /finance/stats
GET    /dashboard/overview`,
    details:'Stok kontrolü, satış yönetimi, tedarik zinciri, müşteri portföyü, finans takibi ve analitik dashboard gibi ERP-benzeri süreçleri tek platformda bir araya getiriyor.',
    disclaimer:'Örnek müşteri, ürün, satış ve finans kayıtları demo verisidir; gerçek ticari veri içermez.',
    images:["assets/projects/inventory/01.png", "assets/projects/inventory/02.png", "assets/projects/inventory/03.png", "assets/projects/inventory/04.png", "assets/projects/inventory/05.png", "assets/projects/inventory/06.png", "assets/projects/inventory/07.png", "assets/projects/inventory/08.png"]
  },
  {
    id:'agencyinfo', index:'05 / BUSINESS APP', name:'AgencyInfo', status:'MVP v1.0', statusClass:'',
    summary:'Seyahat acenteleri için rezervasyon, müşteri, araç, gider, evrak ve rol bazlı yetkilendirme yönetim paneli.',
    stack:['Django','Python','Tailwind','SQLite','Chart.js','Openpyxl','RBAC'],
    metrics:[['Backend','Django'],['UI','Dashboard'],['Export','Excel']], repo:'https://github.com/alisuntur/AgencyInfoProject',
    architecture:'Django application → SQLite3\n       ↓               ↓\nReservations        Files / Excel\nCustomers           RBAC / Dashboard',
    code:`Reservation management
Customer / vehicle records
Expense tracking
RBAC (manager / staff)
Excel receipt export`,
    details:'Seyahat acentelerinin günlük operasyonlarını tek arayüzde yönetmek için geliştirilen yönetim paneli. Dashboard, takvim, finans, belge yükleme ve Excel makbuz üretimi gibi iş akışları içeriyor.',
    disclaimer:'Gösterilen müşteri ve finans kayıtları demo/temsili veridir.',
    images:["assets/projects/agencyinfo/01.png", "assets/projects/agencyinfo/02.png", "assets/projects/agencyinfo/03.png", "assets/projects/agencyinfo/04.png", "assets/projects/agencyinfo/05.png", "assets/projects/agencyinfo/06.png", "assets/projects/agencyinfo/07.png", "assets/projects/agencyinfo/08.png", "assets/projects/agencyinfo/09.png"]
  },
  {
    id:'tarimzeka-mobile', index:'06 / MOBILE', name:'TarımZeka Mobil', status:'Aktif', statusClass:'',
    summary:'TarımZeka karar destek platformunun Flutter tabanlı mobil istemcisi; bölgesel analiz, iklim riski ve öneri akışlarını mobil deneyime taşıyor.',
    stack:['Flutter','Dart','GetX','HTTP','fl_chart'],
    metrics:[['Platform','Cross-platform'],['State','GetX'],['Data','API based']], repo:'https://github.com/alisuntur/tarimzekamobil',
    architecture:'Flutter UI → GetX controllers → App API Client → TarımZeka API\n       ↓\nRegional Analysis · Climate Risk · Recommendations',
    code:`mobil/lib/
  core/network/app_api_client.dart
  features/auth/
  features/profile/
  features/regional_analysis/
  features/climate_risk/
  features/ai_recommendations/`,
    details:'TarımZeka’nın mobil tarafı; Türkiye il/bölge analizleri, iklim riskleri, kullanıcı profili, geçmiş raporlar ve öneri ekranlarını API üzerinden sunacak şekilde yapılandırıldı.',
    disclaimer:''
  },
  {
    id:'rentops', index:'07 / COMMERCIAL · PRIVATE', name:'RentOps', status:'Geliştiriliyor', statusClass:'dev',
    summary:'Araç kiralama operasyonlarının rezervasyon, uygunluk, araç atama, sözleşme, ödeme, yetkilendirme ve audit süreçlerini yöneten ticari masaüstü uygulaması.',
    stack:['Rust','Tauri','TypeScript','SQLite'],
    metrics:[['Durum','In development'],['Model','Commercial / Private'],['Odak','Rental Operations']], repo:null, privateProject:true,
    architecture:'Tauri Desktop UI → TypeScript state → Rust commands → SQLite\n                                      ↓\n                      Reservation & availability engine\n                                      ↓\n                    Vehicle assignment · Audit · Reporting',
    code:`reservation.create()
availability.check()
vehicle.assign()
contract.prepare()
payment.record()
audit.append()`,
    details:'Araç kiralama operasyonlarını tek masaüstü uygulamada yönetmek için geliştirilen ticari proje. Rezervasyon yaşam döngüsü, araç uygunluk ve çakışma kontrolü, araç atama, müşteri ve sözleşme süreçleri, ödeme takibi, rol bazlı yetkilendirme, audit kayıtları ve operasyon raporlamasına odaklanıyor. Native masaüstü deneyimi için Tauri ve Rust tabanlı mimari kullanılıyor.',
    disclaimer:'Ticari ve kapalı kaynak projedir. Kaynak kodu, iş kuralları ve projeye özgü ticari detaylar public olarak paylaşılmamaktadır.'
  },
  {
    id:'nutrijourney', index:'08 / TEAM JAM PROJECT', name:'NutriJourney', status:'Jam Projesi', statusClass:'',
    summary:'Google Oyun ve Uygulama Akademisi kapsamındaki jam etkinliğinde ekip olarak geliştirilen Flutter mobil uygulaması. Projede UI ve frontend geliştirme görevlerini üstlendim.',
    stack:['Flutter','Dart','Firebase','UI Development','Frontend'],
    metrics:[['Etkinlik','Oyun ve Uygulama Akademisi'],['Rol','UI + Frontend'],['Çalışma','Takım Projesi']], repo:'https://github.com/alisuntur/nutri_journey',
    architecture:'UI screens → Flutter widgets → app navigation → Firebase configuration',
    code:`lib/
assets/
android/
ios/
web/
windows/`,
    details:'Google Oyun ve Uygulama Akademisi jam etkinliğinde ekip çalışmasıyla geliştirilen mobil uygulama. Sorumluluğum kullanıcı arayüzlerinin hazırlanması, ekranların Flutter ile geliştirilmesi ve frontend akışlarının oluşturulmasıydı.',
    disclaimer:'Takım projesidir; portföyde belirtilen kişisel katkı alanım UI ve frontend geliştirmedir.',
    images:["assets/projects/nutrijourney/01.jpg", "assets/projects/nutrijourney/02.jpg", "assets/projects/nutrijourney/03.jpg", "assets/projects/nutrijourney/04.jpg", "assets/projects/nutrijourney/05.jpg", "assets/projects/nutrijourney/06.jpg", "assets/projects/nutrijourney/07.jpg", "assets/projects/nutrijourney/08.jpg"]
  },
  {
    id:'tsp', index:'09 / OPTIMIZATION · OR-TOOLS', name:'Eco-Route / TSP Route Optimization', status:'MVP', statusClass:'',
    summary:'İstanbul çıkışlı çoklu teslimat senaryosunda en kısa turu arayan; rota, mesafe, yakıt ve maliyet çıktısını interaktif haritada gösteren optimizasyon projesi.',
    stack:['Python','Google OR-Tools','Folium','Haversine','Optimization'],
    metrics:[['Problem','Travelling Salesman'],['Solver','OR-Tools'],['Çıktı','Interactive Map']], repo:'https://github.com/alisuntur/TSP-OR-Tools',
    architecture:'City coordinates → Haversine distance matrix → road-distance approximation\n                                          ↓\n                              Google OR-Tools TSP solver\n                                          ↓\n                         Route + fuel + cost calculations\n                                          ↓\n                                  Folium HTML map',
    code:`routing_parameters.first_solution_strategy = (
  routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC
)
routing_parameters.local_search_metaheuristic = (
  routing_enums_pb2.LocalSearchMetaheuristic.GUIDED_LOCAL_SEARCH
)
routing_parameters.time_limit.seconds = 10`,
    details:'Gezgin Satıcı Problemini lojistik senaryosuna uygulayan eğitim amaçlı optimizasyon projesi. İstanbul’daki depodan başlayıp dokuz şehri birer kez ziyaret ederek yeniden İstanbul’a dönen turun mesafesini minimize ediyor. Haversine ile mesafe matrisi oluşturuluyor, OR-Tools ile rota aranıyor; toplam mesafeden yakıt ve tahmini maliyet hesaplanarak Folium üzerinde interaktif harita üretiliyor.',
    disclaimer:'Yakıt tüketimi, yakıt fiyatı ve karayolu yaklaşım katsayısı proje senaryosundaki varsayımlardır; çıktı gerçek lojistik maliyet teklifi değildir.',
    images:["assets/projects/tsp/01.png"]
  }];

function projectVisual(p){
  if(p.images && p.images.length){
    return `<div class="project-cover-wrap"><img class="project-cover" src="${p.images[0]}" alt="${p.name} proje ekranı" loading="lazy"><span class="image-count">${p.images.length} görsel</span></div>`;
  }
  if(p.id==='tarimzeka') return '<div class="project-orb"></div>';
  return '<div class="project-screen"><header></header><main><aside></aside><section><div class="screen-line"></div><div class="screen-line"></div><div class="screen-line"></div><div class="screen-line"></div></section></main></div>';
}
function renderProjects(){
  const grid=document.getElementById('project-grid');
  grid.innerHTML=projects.map(p=>`<article class="project-card reveal ${p.featured?'featured':''}">
    <div class="project-copy"><div class="project-card-head"><span>${p.index}</span><span class="project-status ${p.statusClass}">${p.status}</span></div><h3>${p.name}</h3><p>${p.summary}</p><div class="tag-row">${p.stack.map(x=>`<span>${x}</span>`).join('')}</div>${p.disclaimer?`<div class="disclaimer">${p.disclaimer}</div>`:''}<div class="project-actions"><button class="small-btn primary" data-project-open="${p.id}">Detayları aç ↗</button>${p.repo?`<a class="small-btn" href="${p.repo}" target="_blank" rel="noopener">Repository ↗</a>`:p.privateProject?'<span class="small-btn private-label">Ticari proje · kaynak kodu özel</span>':''}</div></div><div class="project-visual">${projectVisual(p)}</div></article>`).join('');
  observeReveals();
}
renderProjects();

const knowledgeNodes = [
 {id:'data',label:'Data',x:'12%',y:'48%',title:'Data & Analytics',desc:'Veri temizleme, KPI tasarlama, keşifsel analiz, görselleştirme ve iş problemine dönük yorumlama.',tags:['Pandas','NumPy','Plotly','Statistics','KPI']},
 {id:'ml',label:'ML / DSS',x:'39%',y:'34%',title:'Machine Learning & Decision Support',desc:'Tahmin modelleri, XGBoost, Ridge, AHP tabanlı çok kriterli skorlama ve model çıktısını karar desteğine dönüştürme.',tags:['XGBoost','scikit-learn','AHP','Forecasting']},
 {id:'backend',label:'Backend',x:'61%',y:'52%',title:'Backend & APIs',desc:'REST API tasarımı, kimlik doğrulama, iş kuralları, servis katmanları ve kurumsal backend geliştirme.',tags:['ASP.NET Core','FastAPI','Django','NestJS','JWT']},
 {id:'db',label:'Database',x:'50%',y:'82%',title:'Databases',desc:'İlişkisel veri modelleme, sorgulama, repository katmanları ve uygulama verisinin güvenilir saklanması.',tags:['PostgreSQL','SQL Server','SQLite','Supabase','EF Core']},
 {id:'frontend',label:'Frontend',x:'84%',y:'29%',title:'Frontend & UI',desc:'Veri yoğun ekranları anlaşılır arayüzlere dönüştürme, dashboard, form akışları ve responsive web geliştirme.',tags:['React','TypeScript','Vite','Tailwind','Recharts']},
 {id:'infra',label:'Infra',x:'86%',y:'76%',title:'Tools & Infrastructure',desc:'Geliştirme ortamı, container yaklaşımı, API dokümantasyonu ve deployment süreçleri.',tags:['Docker','Git','Swagger','Dokploy','Postman']}
];
function renderNodes(){const canvas=document.getElementById('constellation-canvas'); knowledgeNodes.forEach((n,i)=>{const b=document.createElement('button');b.className='knowledge-node'+(i===0?' active':'');b.style.setProperty('--x',n.x);b.style.setProperty('--y',n.y);b.textContent=n.label;b.dataset.node=n.id;canvas.appendChild(b)});}
function selectNode(id){const n=knowledgeNodes.find(x=>x.id===id); if(!n)return; document.querySelectorAll('.knowledge-node').forEach(x=>x.classList.toggle('active',x.dataset.node===id)); document.getElementById('node-status').textContent='NODE: '+n.label.toUpperCase(); document.getElementById('node-panel').innerHTML=`<span class="mini-label">SELECTED NODE</span><h3>${n.title}</h3><p>${n.desc}</p><div class="tag-row">${n.tags.map(t=>`<span>${t}</span>`).join('')}</div>`;}
renderNodes(); document.getElementById('constellation-canvas').addEventListener('click',e=>{const b=e.target.closest('[data-node]');if(b)selectNode(b.dataset.node)});

const modal=document.getElementById('project-modal'), editor=document.getElementById('editor-content'), tabTitle=document.getElementById('tab-title'); let activeProject=null;
function detailBoxes(p){return `<div class="detail-grid">${p.metrics.map(([a,b])=>`<div class="detail-box"><span>${a}</span><b>${b}</b></div>`).join('')}</div>`}
function loadGallery(p){
  if(!p.images || !p.images.length){
    return `<div class="gallery-placeholder single">Bu proje için henüz portföy ekran görüntüsü eklenmedi.</div>`;
  }
  return `<div class="gallery">${p.images.map((src,i)=>`<figure><a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${p.name} ekran görüntüsü ${i+1}" loading="lazy"></a><figcaption>${String(i+1).padStart(2,'0')} / ${String(p.images.length).padStart(2,'0')}</figcaption></figure>`).join('')}</div>`;
}
function renderTab(tab){if(!activeProject)return; const p=activeProject; tabTitle.textContent=tab==='readme'?'README.md':tab==='architecture'?'architecture.json':tab==='gallery'?'screens/':'sample.code';
  if(tab==='readme') editor.innerHTML=`<span class="readme-sub">${p.index} · ${p.status}</span><h2 id="modal-title" class="readme-title">${p.name}</h2><p class="readme-copy">${p.details}</p>${detailBoxes(p)}<div class="tag-row">${p.stack.map(x=>`<span>${x}</span>`).join('')}</div>${p.disclaimer?`<div class="disclaimer">${p.disclaimer}</div>`:''}${p.repo?`<a class="repo-link" href="${p.repo}" target="_blank" rel="noopener">GitHub repository ↗</a>`:''}`;
  if(tab==='architecture') editor.innerHTML=`<pre class="arch-pre">${p.architecture}</pre>`;
  if(tab==='gallery') editor.innerHTML=loadGallery(p);
  if(tab==='code') editor.innerHTML=`<pre class="code-pre">${p.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>`;
}
function openProject(id){activeProject=projects.find(x=>x.id===id); if(!activeProject)return; modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.querySelectorAll('.tab-btn').forEach(x=>x.classList.toggle('active',x.dataset.tab==='readme'));renderTab('readme')}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.addEventListener('click',e=>{const p=e.target.closest('[data-project-open]');if(p)openProject(p.dataset.projectOpen);if(e.target.closest('[data-close-modal]'))closeModal();const t=e.target.closest('.tab-btn');if(t){document.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));t.classList.add('active');renderTab(t.dataset.tab)}});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

function observeReveals(){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));}
observeReveals();

const menuBtn=document.getElementById('menu-toggle'), mobileNav=document.getElementById('mobile-nav');menuBtn.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});mobileNav.addEventListener('click',e=>{if(e.target.tagName==='A'){mobileNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});

const canvas=document.getElementById('data-space'),ctx=canvas.getContext('2d');let w,h,dpr,nodes=[],mouse={x:-9999,y:-9999};
function resize(){dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const count=Math.min(95,Math.max(45,Math.floor(w*h/18000)));nodes=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.3+.4}))}
function draw(){ctx.clearRect(0,0,w,h);for(const n of nodes){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;const dx=n.x-mouse.x,dy=n.y-mouse.y,dm=Math.hypot(dx,dy);if(dm<120){n.x+=dx/dm*.25;n.y+=dy/dm*.25}ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle='rgba(150,190,255,.42)';ctx.fill()}for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<115){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(105,231,255,${(1-d/115)*.10})`;ctx.stroke()}}requestAnimationFrame(draw)}
addEventListener('resize',resize);addEventListener('pointermove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});resize();draw();

document.querySelectorAll('.tilt-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*5}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
