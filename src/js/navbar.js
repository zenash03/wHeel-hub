let xmarkIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="menu-icons" value="xmark-solid"><path fill="#d9d9d9" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        `;
    let barsIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="menu-icons" value="bars-solid"><path fill="#d9d9d9" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        `;

    let sidebar = document.querySelector('#sidebar');
    let sidebarBackground = document.querySelector('#sidebar-background');
    let sidebarContent = document.querySelector('#sidebar-content');
    let menuIconNavbar = document.querySelector('#menu-icon-navbar');

    menuIconNavbar.addEventListener('click', function () {
        sidebarHandler();
    })
    sidebarBackground.addEventListener('click', function () {
        sidebarHandler();
    })
    function sidebarHandler() {
        let sidebarClassNames = sidebar.className.split(' ');
        let sidebarContentClassNames = sidebarContent.className.split(' ');

        let sidebarSH = new ShowHide(sidebar);
        let sidebarBackgroundSH = new ShowHide(sidebarBackground);
        let sidebarContentSH = new ShowHide(sidebarContent);
        let showSidebar = 'show-sidebar';

        if (!sidebarClassNames.includes(showSidebar)) {
            setTimeout(() => {
                sidebarSH.show(showSidebar);
            }, 0);
            sidebarBackgroundSH.hide('hidebg');
            sidebarBackgroundSH.show('showbg');
            setTimeout(() => {
                sidebarContentSH.hide('hide-sidebar-content');
                sidebarContentSH.show('show-sidebar-content');
            }, 100);
            menuIconNavbar.innerHTML = xmarkIcon;
            document.querySelector('body').style.overflow = 'hidden';
        }
        else {
            sidebarContentSH.hide('show-sidebar-content');
            sidebarContentSH.show('hide-sidebar-content');
            setTimeout(() => {
                sidebarBackgroundSH.hide('showbg');
                sidebarBackgroundSH.show('hidebg');
            }, 200)
            setTimeout(() => {
                sidebarSH.hide(showSidebar);
            }, 500)
            menuIconNavbar.innerHTML = barsIcon;
            document.querySelector('body').style.overflow = 'auto';
        }
    }

    function ShowHide(comp) {
        let compClassName = comp.className;

        this.show = function (nameClass = 'show') {
            comp.className = comp.className.split(' ').filter((name) => nameClass !== name).concat(nameClass).join(' ');
        }
        this.hide = function (nameClass = 'show') {
            comp.className = comp.className.split(' ').filter((name) => nameClass !== name).join(' ');
        }
    }