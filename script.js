const games=[
{title:"魔弾ダンダンジョン",category:"就職作品 / 現在制作中",members:"制作人数：1人",period:"",image:"images/madan.svg",description:"ローグライク要素を持つアクションシューティング",role:"個人制作"},
{title:"モグラ相撲",category:"2年生 / チーム制作",members:"制作人数：4人",period:"制作期間：10日",image:"images/mogura.svg",description:"敵AIと落とし合う、ターン性ひっぱりアクション"},
{title:"急降下カラス飛行",category:"2年生 / チーム制作",members:"制作人数：3人",period:"制作期間：1ヶ月",image:"images/karasu.svg",description:"「急降下」で攻撃する自動移動2Dアクション"},
{title:"ブンブンている",category:"2年生 / チーム制作",members:"制作人数：4人",period:"制作期間：1ヶ月",image:"images/bunbun.svg",description:"尻尾で攻撃する見下ろし視点ボス戦アクション"},
{title:"相対傘",category:"2年生 / チーム制作",members:"制作人数：3人",period:"制作期間：1ヶ月",image:"images/soutai.svg",description:"歌舞伎風のボス戦アクション"},
{title:"災Guy",category:"3年生 / チーム制作",members:"制作人数：3人",period:"制作期間：4ヶ月",image:"images/saiguy.svg",description:"ブロック破壊が爽快な落下アクション"},
{title:"わたる",category:"3年生 / チーム制作",members:"制作人数：3人",period:"制作期間：10日",image:"images/wataru.svg",description:"風を操り綿毛をゴールさせる2Dアクション"}];

const featured=document.getElementById("featured"),y2=document.getElementById("year2"),y3=document.getElementById("year3");
function card(g,large=false){const e=document.createElement("article");e.className=large?"featured":"card";e.innerHTML=large?`<img src="${g.image}" alt="${g.title}"><div class="fi"><p>${g.category}</p><h3>${g.title}</h3><p>${g.description}</p><p>${g.members}</p></div>`:`<img src="${g.image}" alt="${g.title}"><div class="info"><h3>${g.title}</h3><p>${g.members} / ${g.period.replace("制作期間：","")}</p></div>`;e.onclick=()=>open(g);return e}
featured.appendChild(card(games[0],true));games.slice(1).forEach(g=>(g.category.startsWith("2年生")?y2:y3).appendChild(card(g)));
const modal=document.getElementById("modal"),mi=document.getElementById("mi"),mc=document.getElementById("mc"),mt=document.getElementById("mt"),meta=document.getElementById("meta"),md=document.getElementById("md"),mr=document.getElementById("mr");
function open(g){mi.src=g.image;mi.alt=g.title;mc.textContent=g.category;mt.textContent=g.title;meta.innerHTML=`<span>${g.members}</span><span>${g.period}</span>`;md.textContent=g.description;mr.textContent=g.role?"担当："+g.role:"";modal.classList.add("open");document.body.style.overflow="hidden"}
function close(){modal.classList.remove("open");document.body.style.overflow=""}
document.querySelectorAll("[data-close]").forEach(e=>e.onclick=close);document.onkeydown=e=>{if(e.key==="Escape")close()};