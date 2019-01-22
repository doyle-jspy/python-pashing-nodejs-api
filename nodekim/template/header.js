const header = (hint) =>{
        return `
        <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>게임 리뷰영상 매칭</title>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <header>
            <a href="/"><h2>인기게임 후기 영상</h2></a>
            <p id="searchHint">${hint}</p>
        </header>
    `
    } 


module.exports = header