var membrosStaff = [
    {
        id: "1",
        avatar: "img/starB0y.png",
        user: "StarB0y",
        cargo: "ADM Geral, Ficwriter e Helper",
        perfil: "https://www.spiritfanfiction.com/perfil/blue_bird7",
    },
    {
        id: "2",
        avatar: "img/kyoRen.jpg",
        user: "KyoRen",
        cargo: "ADM Geral, Beta reader e Ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/winryharuno",
    },
    {
        id: "3",
        avatar: "img/aakio.jpg",
        user: "aakio",
        cargo: "Beta reader",
        perfil: "https://www.spiritfanfiction.com/perfil/nuvenkawaii",
    },
    {
        id: "4",
        avatar: "img/wenieex.jpg",
        user: "wenieex",
        cargo: "Capista",
        perfil: "https://www.spiritfanfiction.com/perfil/appleboy",
    },
    {
        id: "5",
        avatar: "img/yumi-sankawaii.jpg",
        user: "Yumi-sankawaii",
        cargo: "Beta reader e Helper",
        perfil: "https://www.spiritfanfiction.com/perfil/pyumi",
    },
    {
        id: "6",
        avatar: "img/anym_shimizu.jpg",
        user: "Anym_Shimizu",
        cargo: "Capista e Helper",
        perfil: "https://www.spiritfanfiction.com/perfil/anym-mylowuchih",
    },
    {
        id: "7",
        avatar: "img/akublog.png",
        user: "akublog",
        cargo: "Beta reader e Ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/amyzinhatut",
    },
    {
        id: "8",
        avatar: "img/calist0_.png",
        user: "calist0_",
        cargo: "Beta reader e Ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/calist0_",
    },
    {
        id: "9",
        avatar: "img/mayumi_knight.jpg",
        user: "Mayumi_Knight",
        cargo: "Capista",
        perfil: "https://www.spiritfanfiction.com/perfil/gbis",
    },
    {
        id: "10",
        avatar: "img/mikey-.gif",
        user: "Mikey-",
        cargo: "Capista",
        perfil: "",
    },
    {
        id: "11",
        avatar: "img/capopera_.jpg",
        user: "capopera_",
        cargo: "Beta reader, Ficwriter e Helper",
        perfil: "https://www.spiritfanfiction.com/perfil/foreverziall122",
    },
    {
        id: "12",
        avatar: "img/D34dlyN1ghsh4d3.jpg",
        user: "D34dlyN1ghsh4d3",
        cargo: "Ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/ac411b0955104ee3b4d44f111d2753",
    },
    {
        id: "13",
        avatar: "img/scaravodka.jpg",
        user: "scaravodka",
        cargo: "Ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/loveztaetae",
    },
    {
        id: "14",
        avatar: "img/mitchy-.png",
        user: "mitchy-",
        cargo: "Beta reader",
        perfil: "https://www.spiritfanfiction.com/perfil/09ad1941d7f248889549f6e11deea1",
    },
    {
        id: "15",
        avatar: "img/semavatar.jpg",
        user: "Allatus",
        cargo: "Helper",
        perfil: "https://www.spiritfanfiction.com/perfil/5222c02126c4406c90543f9922dd9b",
    },
    {
        id: "16",
        avatar: "img/evebrea.jpg",
        user: "EveBrea",
        cargo: "Capista",
        perfil: "https://www.spiritfanfiction.com/perfil/EveBrea",
    },
    {
        id: "17",
        avatar: "img/atanye.jpg",
        user: "Atanye",
        cargo: "Capista",
        perfil: "https://www.spiritfanfiction.com/perfil/d0b19bbad5e946949970fd57b0cacc",
    },
    {
        id: "18",
        avatar: "img/interstellar_.jpg",
        user: "Interstellar_",
        cargo: "Beta reader",
        perfil: "https://www.spiritfanfiction.com/perfil/c73c7ea0b8ff468682e41b16eb1399",
    },
    {
        id: "19",
        avatar: "img/ketsueki_505.jpg",
        user: "Ketsueki_505",
        cargo: "Ficwriter",
        perfil: "https://www.spiritfanfiction.com/perfil/ari_sensei",
    },
    // {
    //     id: "20",
    //     avatar: "img/",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
    // {
    //     id: "21",
    //     avatar: "img/",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
    // {
    //     id: "22",
    //     avatar: "img/",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
    // {
    //     id: "23",
    //     avatar: "img/",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
    // {
    //     id: "24",
    //     avatar: "",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
    // {
    //     id: "25",
    //     avatar: "img/",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
    // {
    //     id: "26",
    //     avatar: "img/",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
    // {
    //     id: "27",
    //     avatar: "img/",
    //     user: "",
    //     cargo: "",
    //     perfil: "",
    // },
]

var elementoExibirMembros = document.getElementById("exibirMembros");

function ListarMembros() {
    elementoExibirMembros.innerHTML = "";
    for (var i = 0; i < membrosStaff.length; i++) {
        elementoExibirMembros.innerHTML =
            elementoExibirMembros.innerHTML +
            '<figure><a href="' + membrosStaff[i].perfil + '"><img class="img-membros" src="' + membrosStaff[i].avatar + '"></a><figcaption>' + membrosStaff[i].user + '<br>' + membrosStaff[i].cargo + '</figcaption></figure>';
    }
}

ListarMembros();