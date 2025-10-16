/* =======================
   시나리오 (각각 10회)
======================= */
const scriptData = {
  jo: [
    {text:"안녕? 오늘도 왔네. 나랑 이야기하고 싶었지?"},
    {text:"요즘 좀 바쁘지 않았어?",choices:[
      {text:"응, 그래도 널 보러 왔어.",affection:+2,nextText:"진짜? 그런 말 들으면 기분 좋아~"},
      {text:"굳이?.",affection:-1,nextText:"그래도 이렇게 와줘서 고마워."}
    ]},
    {text:"오늘 날씨가 좀 흐리네.",choices:[
      {text:"그래도 너 보니까 맑아졌어.",affection:+2,nextText:"뭐야~ 그런 말 갑자기 하면 심쿵하잖아!"},
      {text:"너 때문이야.",affection:-1,nextText:"뭐래 ㅋㅋ"}
    ]},
    {text:"주말에 뭐했어?",choices:[
      {text:"너 생각.",affection:+3,nextText:"…진짜? 그건 좀 설레는데."},
      {text:"그냥 잤어.",affection:0,nextText:"그럴 수도 있지~"}
    ]},
    {text:"요즘 뭐가 제일 재밌어?",choices:[
      {text:"너랑 대화하는 거.",affection:+2,nextText:"오~ 그런 말엔 약하다고."},
      {text:"게임.",affection:-1,nextText:"나보다 게임이라니ㅠㅠ"}
    ]},
    {text:"혹시 내가 평소에 어떤 이미지로 보여?",choices:[
      {text:"따뜻하고 부드러워.",affection:+2,nextText:"으악, 그런 말 처음 들어... 고마워 ☺️"},
      {text:"똥으로 보여.",affection:-5,nextText:"…그럴 수도 있지. 나도 노력할게."}
    ]},
    {text:"나 커피보단 코코아파야.",choices:[
      {text:"그럼 같이 마시러 갈래?",affection:+2,nextText:"좋지~ 약속! ☕"},
      {text:"난 커피만.",affection:-1,nextText:"취향 존중…ㅎ"}
    ]},
    {text:"나 요즘 피곤하다..",choices:[
      {text:"쉬어, 내가 대신 안아줄게.",affection:+3,nextText:"…그 말 좀 위험한데?///"},
      {text:"커피 마셔.",affection:-1,nextText:"나 커피 싫어한다니까~"}
    ]},
    {text:"너는 나한테 어떤 감정이야?",choices:[
      {text:"좋아해.",affection:+3,nextText:"…잠깐만, 그 말 다시 해줘…///"},
      {text:"글쎄.",affection:0,nextText:"그럼 조금 더 알아가면 되겠지~"}
    ]},
    {text:"오늘은 마지막으로 한마디만 해줄래?",choices:[
      {text:"앞으로도 너랑 함께 있고 싶어.",affection:+3,nextText:"…나도. 진심으로."},
      {text:"이제 그만할래.",affection:-3,nextText:"…그래. 이제 그만이구나."}
    ]}
  ],

  a: [
    {text:"히히~ 귀여운 아영 등장!"},
    {text:"오늘은 칭찬 한마디라도 해줘!",choices:[
      {text:"진짜 귀엽다니까.",affection:+2,nextText:"히히, 역시 넌 눈썰미가 좋아~"},
      {text:"귀여운 척하지마ㅋㅋ",affection:-2,nextText:"흥! 나 삐질 거야!"}
    ]},
    {text:"내 머리 어때? 새로 묶었어!",choices:[
      {text:"완전 잘 어울려!",affection:+2,nextText:"에헤헤~ 이래서 좋아."},
      {text:"그냥 평범?",affection:-1,nextText:"야, 너무해~"}
    ]},
    {text:"요즘 나 때문에 피곤하지 않아?",choices:[
      {text:"아니, 오히려 힘나.",affection:+2,nextText:"정말?! 나도 그래~"},
      {text:"조금…",affection:-1,nextText:"에이, 미안ㅠ"}
    ]},
    {text:"나랑 놀러가면 어디가고싶어?",choices:[
      {text:"테마파크!",affection:+2,nextText:"꺄~ 신난다!"},
      {text:"도서관.",affection:-1,nextText:"……너 진지하네ㅋㅋ"}
    ]},
    {text:"사진 찍을래?",choices:[
      {text:"좋아, 포즈잡아!",affection:+2,nextText:"찰칵📸 완벽해!"},
      {text:"귀찮아ㅠ",affection:-1,nextText:"흥! 나 혼자 찍을거야."}
    ]},
    {text:"너는 어떤 타입의 사람 좋아해?",choices:[
      {text:"지금 내 앞에 있는 사람.",affection:+3,nextText:"……////"},
      {text:"차분한 사람.",affection:0,nextText:"그럼 나는 탈락이네?ㅋㅋ"}
    ]},
    {text:"내가 화나면 어떻게 할거야?",choices:[
      {text:"달래줄거야.",affection:+2,nextText:"역시 넌 최고야."},
      {text:"그냥 도망가.",affection:-2,nextText:"야! 도망치기 있기야?"}
    ]},
    {text:"이제 거의 끝이야. 나 어때 보여?",choices:[
      {text:"세상에서 제일 귀여워.",affection:+3,nextText:"…그 말, 진짜야?"},
      {text:"아직은 덜 귀여워.",affection:-1,nextText:"그럼 더 노력해야지!"}
    ]},
    {text:"다음에도 나한테 와줄거지?",choices:[
      {text:"당연하지.",affection:+2,nextText:"약속이야💖"},
      {text:"그건 몰라~",affection:-2,nextText:"몰라~는 금지!!"}
    ]}
  ],

  yeong: [
    {text:"후후… 오늘은 어떤 선택을 할래?"},
    {text:"나한테 겁나?",choices:[
      {text:"살짝…",affection:-1,nextText:"그래, 그게 정상이지."},
      {text:"아니, 오히려 매력있어.",affection:+2,nextText:"호오? 제법인데?"}
    ]},
    {text:"내가 웃으면 무섭다는 사람 많더라.",choices:[
      {text:"난 예쁘다고 생각하는데?",affection:+3,nextText:"…너, 위험한 취향이야."},
      {text:"무섭긴 하지ㅋㅋ",affection:0,nextText:"적어도 솔직하네."}
    ]},
    {text:"다른 애들이랑도 이렇게 얘기해?",choices:[
      {text:"너한텐 다르게 해.",affection:+2,nextText:"좋아, 그건 특별대우야."},
      {text:"다 똑같이 해.",affection:-2,nextText:"그럼 난 왜 신경 쓰는거지…"}
    ]},
    {text:"날 이해할 수 있을까?",choices:[
      {text:"하려고 노력중.",affection:+2,nextText:"그 말… 싫지 않네."},
      {text:"글쎄.",affection:-1,nextText:"그럴 줄 알았어."}
    ]},
    {text:"혹시 나한테 거짓말한 적 있어?",choices:[
      {text:"없어.",affection:+2,nextText:"좋아. 믿을게."},
      {text:"있지.",affection:-2,nextText:"하, 솔직하긴 하네."}
    ]},
    {text:"내가 사라진다면… 넌?",choices:[
      {text:"찾을 거야.",affection:+3,nextText:"…그 말, 기억해."},
      {text:"그냥 잊겠지.",affection:-3,nextText:"역시 인간은 냉정하군."}
    ]},
    {text:"가끔은 모든 게 지겨워.",choices:[
      {text:"그럴 땐 내가 옆에 있을게.",affection:+2,nextText:"…위험한 말이야."},
      {text:"혼자 있고 싶을 땐 혼자 있자.",affection:0,nextText:"현명하네."}
    ]},
    {text:"마지막으로 묻지. 나한테 남을 거야?",choices:[
      {text:"응.",affection:+3,nextText:"…그 말, 듣고 싶었어."},
      {text:"아니.",affection:-3,nextText:"그래. 그럼 여기서 끝이야."}
    ]},
    {text:"끝났어.",choices:[
      {text:"그래도 넌 기억할게.",affection:+2,nextText:"기억이라… 그게 가장 잔인하지."},
      {text:"잊을래.",affection:-2,nextText:"좋아. 그렇게 해."}
    ]}
  ]
};

/* ========== 요소들 ========== */
const chars=document.querySelectorAll(".character");
const dlg=document.getElementById("dialogue");
const dlgAvatar=document.getElementById("dlgAvatar");
const dlgText=document.getElementById("dialogueText");
const choiceBox=document.getElementById("choiceBox");
const affPanel=document.getElementById("affectionPanel");
const ending=document.getElementById("ending");
const endImg=document.getElementById("endingImg");
const endTitle=document.getElementById("endingTitle");
const endDesc=document.getElementById("endingDesc");
const restart=document.getElementById("btnRestart");
const btnWOW=document.getElementById("btnWOW");
const btnSave=document.getElementById("btnSave");
const btnLoad=document.getElementById("btnLoad");
const btnReset=document.getElementById("btnReset");

let affection={jo:0,a:0,yeong:0};
let current=null,index=0,typing=false,typeTimer=null;

/* 랜덤 ±1 */
function randomDelta(b){if(b===0)return 0;const r=Math.floor(Math.random()*3)-1;return b+r;}
/* 테두리색/표정(단일 이미지 모드) */
function updateVisuals(id){
  const s=affection[id];
  dlg.classList.remove("low","mid","high");
  if(s<3)dlg.classList.add("low");
  else if(s<8)dlg.classList.add("mid");
  else dlg.classList.add("high");
  let mood="neutral"; if(s<=1)mood="sad"; else if(s>=8)mood="happy";
  dlgAvatar.src=`assets/img/${id}_${mood}.png`;
}
/* 호감도 */
function updateAff(id,d){
  affection[id]+=d;if(affection[id]<0)affection[id]=0;
  affPanel.textContent=`❤️ ${affection[id]}`;
  updateVisuals(id);
  function showAffEffect(delta) {
  const el = document.createElement("div");
  el.className = "aff-pop";
  el.textContent = delta > 0 ? `+💖` : `-💔`;
  el.style.color = delta > 0 ? "#ff3c9e" : "#555";
  dlg.querySelector(".dlg-avatar-wrap").appendChild(el);
  setTimeout(() => el.remove(), 900);

  function updateAff(id,d){
  affection[id]+=d;if(affection[id]<0)affection[id]=0;
  affPanel.textContent=`❤ ${affection[id]}`;
  updateVisuals(id);
  if (d !== 0) showAffEffect(d);  // ← 추가!

  function showAffEffect(delta){
  const el = document.createElement("div");
  el.className = "aff-pop";
  el.textContent = delta > 0 ? `+💖` : `-💔`;
  el.style.color = delta > 0 ? "#ff3c9e" : "#555";
  document.querySelector(".dlg-avatar-wrap").appendChild(el);
  setTimeout(()=> el.remove(), 900);

  function updateAff(id,d){
  affection[id]+=d;if(affection[id]<0)affection[id]=0;
  affPanel.textContent=`❤ ${affection[id]}`;
  updateVisuals(id);
  if (d !== 0) showAffEffect(d);  // ← 추가
}
}
}
}
}
/* 타자기 */
function typeText(t,done){
  clearInterval(typeTimer);typing=true;dlgText.textContent="";
  let i=0;typeTimer=setInterval(()=>{dlgText.textContent=t.slice(0,i++);if(i>t.length){clearInterval(typeTimer);typing=false;done&&done();}},35);
}
/* 대화 표시 */
function showCurrent(){
  const arr=scriptData[current];const node=arr[index];
  if(!node){showEnding();return;}
  typeText(node.text,()=>{});
  choiceBox.innerHTML="";
  if(node.choices){
    node.choices.forEach(c=>{
      const b=document.createElement("button");
      b.className="choice";b.textContent=c.text;
      b.onclick=()=>{
        const d=randomDelta(c.affection||0);
        updateAff(current,d);
        dlgText.textContent=c.nextText||"";
        choiceBox.innerHTML="";
        setTimeout(()=>{index++;showCurrent();},1000);
      };
      choiceBox.appendChild(b);
    });
  } else {setTimeout(()=>{index++;showCurrent();},1000);}
}

/* 엔딩 분기 */
function showEnding(){
  dlg.classList.add("hidden");
  ending.classList.remove("hidden");
  const s=affection[current];
  let type="normal"; if(s>=15)type="good"; else if(s<=5)type="bad";
  endImg.src=`assets/img/ending_${current}_${type}.png`;
  endTitle.textContent= type==="good"?"GOOD ENDING 💖":type==="bad"?"BAD ENDING 💔":"NORMAL ENDING 🌸";
  endDesc.textContent= type==="good"?"당신과 "+current+"의 인연은 따뜻하게 이어졌다."
                      : type==="bad"?"차가운 공기만이 남았다. 그녀는 사라졌다."
                      : "평범하지만 편안한 하루의 끝이었다.";
}

/* 이벤트 */
chars.forEach(ch=>{
  ch.addEventListener("click",()=>{
    current=ch.dataset.id; index=0;
    dlgAvatar.src=ch.querySelector("img").src;
    affPanel.textContent=`❤️ ${affection[current]}`;
    dlg.classList.remove("hidden");
    updateVisuals(current);
    showCurrent();
  });
});
restart.onclick=()=>{ending.classList.add("hidden");dlg.classList.add("hidden");};
btnWOW.onclick=()=>{document.querySelectorAll(".wowable").forEach(el=>{el.classList.remove("wow-up");void el.offsetWidth;el.classList.add("wow-up");});};
btnSave.onclick=()=>{localStorage.setItem("ayoung_save",JSON.stringify({affection}));};
btnLoad.onclick=()=>{const d=JSON.parse(localStorage.getItem("ayoung_save")||"{}");affection=d.affection||affection;};
btnReset.onclick=()=>{localStorage.removeItem("ayoung_save");affection={jo:0,a:0,yeong:0};};

chars.forEach(ch=>{
  ch.addEventListener("click",()=>{
    current=ch.dataset.id; index=0;
    // ▼ 테마 클래스 갱신
    document.body.classList.remove('theme-jo','theme-a','theme-yeong');
    document.body.classList.add(`theme-${current}`);

    dlgAvatar.src=ch.querySelector("img").src;
    affPanel.textContent=`❤ ${affection[current]}`;
    dlg.classList.remove("hidden");
    updateVisuals(current);
    showCurrent();
  });
});