// テスト
// alert("これはテストです。")

// 下記のサイトを参考にしながら神経衰弱アプリを作成する
// https://kusakarism.info/?p=11646

// 使用する変数の宣言
let start_time; //ゲームを開始したときの時刻
let now_time; //現在の時刻
let count=0;//試行した回数
let match_count=0;//一致した回数
let remaining_count = 10; //試行できる回数


starttime=("今や明日");
console.log(starttime)


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


    //ランダム並べたトランプの表示




}



window.onload = tramp(); //window.onloadでページ読み込み時に自動的に指定した関数が実行されるらしい
