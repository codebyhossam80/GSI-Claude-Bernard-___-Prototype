const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
addEventListener("scroll",()=>{let h=document.documentElement;$(".progress").style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"});
$(".hamb").onclick=()=>{$("nav").classList.toggle("open")};
$$("nav a").forEach(a=>a.onclick=()=>{$("nav").classList.remove("open")});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.1});
$$(".reveal").forEach(e=>observer.observe(e));

const teams={
direction:[["DIR","M. Taha","Directeur"],["DIR","M. Yajid","Directeur adjoint"],["DIR","Mme Hind","Équipe de direction"],["DIR","Mme Siham","Équipe de direction"]],
surveillance:[["VIE","M. Hassan","Surveillance"],["VIE","M. Anas","Surveillance"],["VIE","Mme Iman","Surveillance"]],
transport:[["BUS","M. Khalifa","Transport scolaire"],["BUS","M. Abdullah","Transport scolaire"]]
};
function showTeam(k){$("#people").innerHTML=teams[k].map(x=>`<article class="person"><div class="avatar"><span>${x[0]}</span></div><div class="person-info"><small>${x[2]}</small><h3>${x[1]}</h3><p>Profil de démonstration</p></div></article>`).join("")}
showTeam("direction");
$$(".tabs button").forEach(b=>b.onclick=()=>{$$(".tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");showTeam(b.dataset.team)});

const modal=$("#modal");
function open(html){$("#modalcontent").innerHTML=html;modal.classList.add("show")}
$(".close").onclick=()=>modal.classList.remove("show");modal.onclick=e=>{if(e.target===modal)modal.classList.remove("show")};
$$("[data-open]").forEach(b=>b.onclick=()=>{
 if(b.dataset.open==="cantine")open(`<h3>🍽 Menu de la semaine</h3><p>Exemple de présentation à remplacer par le menu officiel.</p><div class="receipt"><b>Lundi</b> — Menu à définir<br><b>Mardi</b> — Menu à définir<br><b>Mercredi</b> — Menu à définir<br><b>Jeudi</b> — Menu à définir<br><b>Vendredi</b> — Menu à définir</div>`);
 else open(`<h3>🚌 Transport scolaire</h3><p>Cette interface pourra présenter les lignes, zones, horaires et demandes de transport après validation par l'école.</p><div class="receipt"><b>Responsables de démonstration</b><br>M. Khalifa · M. Abdullah</div>`);
});
$("#form").onsubmit=e=>{e.preventDefault();let f=new FormData(e.target);open(`<h3>Demande de démonstration</h3><p>Merci ${f.get("prenom")} ${f.get("nom")}. Dans cette version, aucune donnée n'est envoyée ni enregistrée.</p><div class="receipt"><b>Production :</b><br>connecter ce formulaire à un système sécurisé contrôlé par l'établissement.</div>`);e.target.reset()};
$("#receipt").onclick=()=>open(`<h3>🧾 Exemple de reçu</h3><p>Document de démonstration — aucun paiement réel.</p><div class="receipt"><b>GSI Claude Bernard</b><br>Référence : DEMO-2026-001<br>Élève : Exemple Élève<br>Objet : Frais scolaires<br>Montant : À définir<br>Date : ${new Date().toLocaleDateString("fr-FR")}</div>`);
