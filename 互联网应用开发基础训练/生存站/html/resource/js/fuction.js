//界面初始设定
function init(W, H, file, ach, opt) {
    if(file) {
        file = document.getElementsByClassName("file")[0];
        file.style.left = String(W*380/1280)+"px";
        file.style.top = String(H*70/720)+"px";
        file.style.width = String(W*500/1280)+"px";
    }
    
    if(ach) {
        ach = document.getElementsByClassName("ach");
        for(var i = 0; i < ach.length; i++) {
            ach[i].style.left = String(W*420/1280)+"px";
            ach[i].style.top = String(H*120/720)+"px";
            ach[i].style.width = String(W*400/1280)+"px";
            ach[i].style.height = String(H*200/720)+"px";
        }
    }
    
    if(opt) {
        opt = document.getElementsByClassName("option")[0];
        opt.style.left = String(W*380/1280)+"px";
        opt.style.top = String(H*70/720)+"px";
        opt.style.width = String(W*500/1280)+"px";
    }
    
}

function add_base() {
    document.write("<div class=\"base\">");
    document.write("<input class=\"bt\" type=\"button\" value=\"主页\" onclick=\"Next(index)\">");
    document.write("<input class=\"bt\" type=\"button\" value=\"存档\" onclick=\"show()\">")
    document.write("<input class=\"bt\" type=\"button\" style = \"display: none\" value=\"返回\" onclick=\"location.reload()\">")
    document.write("</div>")
}

//页面跳转
function Goto(url) {
    var myVideo = document.getElementsByTagName("video")[0];
    myVideo.addEventListener('ended', function(){
        window.location.assign(url);
    });
}

function Next(URL) {
    window.location.assign(URL);
}

//对话框
function say(T, N) {
    var innerbox = document.getElementsByClassName("innerBox")[0];
    var name = document.getElementsByClassName("name")[0];
    name.innerHTML = N;
    innerbox.innerHTML = '';
    var len = T.length;
    var timer = null;
    var index = 0;
    timer = setInterval(function(){
        if(index == len) {
            clearInterval(timer);
        }
        innerbox.innerHTML += T.charAt(index++);
    }, 25);
};

//存档
function file_name(id) {
    var name = localStorage.getItem(id+30);
    if(name == null) return "空存档";
    else return name;
}

function add_file() {
    document.write("<div class=\"file\">");
    document.write("<input class=\"files\" type=\"button\" value="+file_name(1)+" onclick=\"Save(1, now, place)\">");
    document.write("<input class=\"files\" type=\"button\" value="+file_name(2)+" onclick=\"Save(2, now, place)\">");
    document.write("<input class=\"files\" type=\"button\" value="+file_name(3)+" onclick=\"Save(3, now, place)\">");
    document.write("<input class=\"files\" type=\"button\" value="+file_name(4)+" onclick=\"Save(4, now, place)\">");
    document.write("<input class=\"files\" type=\"button\" value="+file_name(5)+" onclick=\"Save(5, now, place)\">");
    document.write("<input class=\"files\" type=\"button\" value="+file_name(6)+" onclick=\"Save(6, now, place)\">");
    document.write("</div>");
}
function Save(id, now, place) {
    var opt = document.getElementsByClassName("option")[0];
    var save = document.getElementsByClassName("file")[0];

    if(localStorage.getItem(id) != null) {
        if(confirm("之前的存档可能会被覆盖， 是否继续保存？")) {
            localStorage.setItem(id, now);
            localStorage.setItem(id+30, place);
            alert("存档成功！");
        }
    }
    else {
        localStorage.setItem(id, now);
        localStorage.setItem(id+30, place);
        alert("存档成功！");
    }
    location.reload();
}

function show() {
    var opt = document.getElementsByClassName("option")[0];
    opt.style.display = "none";
    var save = document.getElementsByClassName("file")[0];
    save.style.display = "block";
    var back = document.getElementsByClassName("bt")[2];
    back.style.display = "block";
}

//成就获得
function get_ach(id, url) {
    if(localStorage.getItem(id) == 1) {
        Next(url);
        return ;
    }
    var opt = document.getElementsByClassName("option")[0];
    opt.style.display = "none";
    var ach = document.getElementsByClassName("ach")[0];
    ach.style.display = "block";
    localStorage.setItem(id, 1);
}

//尚未更新
function remind() {
    alert("此分支尚未加入，尽请期待！");
    ach = document.getElementsByClassName("ach")[0];
    ach.style.display = "none";
    opt = document.getElementsByClassName("option")[0];
    opt.style.display = "block";
}

