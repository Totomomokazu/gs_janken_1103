// テスト
// alert("これはテストです。")

// 下記のサイトを参考にしながら神経衰弱アプリを作成する
// https://kusakarism.info/?p=11646

// 使用する変数の宣言
let starttime; //ゲームを開始したときの時刻
let timer_function;//ゲーム開始から現在の時刻まで計測する変数
let count=0;//試行した回数
let match_count=0;//一致した回数
let remaining_count = 10; //試行できる回数


test=("今や明日");
console.log(test)


// トランプの絵札の作成
function tramp(){
    let beforeArray=[]; //デフォルト状態の絵札を入れる配列を宣言
    let afterArray=[]; //ランダム状態の絵札を入れる配列を宣言
    let sub=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; //1～13の数字を作成
    
    
    //手札を作成するループ
    for(let i=0;i<13;i++){ //iの0から13まで同じ動作を繰り返し
        beforeArray.push("♠"+sub[i]); //.pushという配列のメソッドを使い、beforeArray配列にsub配列i番目の値と♠を入れる
        beforeArray.push("Σ"+sub[i]); //文字化けするので
        beforeArray.push("Φ"+sub[i]);
        beforeArray.push("♦"+sub[i]);
        console.log(beforeArray)     
    }
    console.log(beforeArray,"トランプの手札を用意しました。")


    //ランダムに並べられた手札を作成するループ
    for(let i=0;i<52;i++){
        let r=Math.floor(Math.random()*beforeArray.length); //beforeArray.lenghでbeforeArrayの長さ分だけランダム表示
        afterArray.push(beforeArray[r]);//beforeArrayの中のランダムで選択された番号にある要素を代入
        beforeArray.splice(r,1)//選択された場所を削除
        console.log(afterArray)
    }
    console.log(beforeArray,"トランプの手札をランダムに配置しました。")


    //ランダム並べたトランプの表示準備
    let field=$("#field"); //fieldとidで書かれている部分を選択
    console.log("fieldセレクタを選択しました!")
    for(i=0;i<52;i++){
        let creatediv=$("<div></div>") //新しくdivを作成
        console.log("新しいdivを作成しました!");
        creatediv.addClass("card back");//cardというクラスとbackというクラス名を作っている。クラス名を入れることで2つのクラスを作れるらしい
        console.log("新しく作成したdivにcard backというclass名を付与しました")
        creatediv.cardFace = afterArray[i];//プロパティとは定義された箱のことで、その箱にcardfaceという名前をつけている。また、afterArrayを代入している
        console.log("cardFaceと定義したプロパティにafterArrayを代入しました")
        // creatediv.innerHTML="";
        // console.log("divの中に空白を代入")
        // creatediv.onclick = turn;
        creatediv.appendTo(field);
        console.log("fieldの子要素にdivを追加") 
    }


    // 時間の設定
    starttime=new Date() //newDateとは現在の時刻を取得できる
    timer_function= setInterval(time_count,1000); //1000m秒（1秒）ごとに関数を実行。setIntervalは決められた間隔ごとに指定した関数を実行するjsの組み込み関数らしい
    console.log(time)
}


function time_count(){ //時間を計測する関数
    let nowtime=new Date();//現在の時間取得
    let time=Math.floor((nowtime-starttime)/1000);
    // console.log(nowtime)
    let timer = "経過時間: " + time + "秒" ;
    $("#time").html(timer);
}






window.onload = tramp(); //window.onloadでページ読み込み時に自動的に指定した関数が実行されるらしい
