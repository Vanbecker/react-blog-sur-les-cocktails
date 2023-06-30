// const Header = ({ user }) => {
//     return (
//         <header>
//             <div className="logo"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cocktail-bar-logo-design-template-0b6dcabbeddbf2172792d9c93780969b_screen.jpg?ts=1586437653" alt="drink" /></div>
//             <h1 className="title">Blog sur les cocktails</h1>
//             <div className="menu">
//                 <ul>
//                     <li>Menu 1</li>
//                     <li>Menu 2</li>
//                     <li>Menu 3</li>
//                 </ul>
//             </div>
//             <div className="user">{user.firstName} {user.lastName}</div>
//         </header>
//     );
// };

// export default Header;


const Header = ({ user }) => {
    return (
        <header>
            <div className="logo"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cocktail-bar-logo-design-template-0b6dcabbeddbf2172792d9c93780969b_screen.jpg?ts=1586437653" alt="drink" /></div>
            <h1 className="title">Blog sur les cocktails</h1>

            <div class="dropdown menu">
                <button class="mainmenubtn">Main Menu</button>
                <div class="dropdown-child">
                    <a href="https://www.youtube.com/watch?v=PA3P1-aSvKQ">Sub-Menu 1</a>
                    <a href="">Menu 2</a>
                    <a href="">Menu 3</a>
                    <a href="">Menu 4</a>
                    <a href="">Menu 5</a>
                </div>
            </div>

            <div className="user">{user.firstName} {user.lastName}</div>
        </header>
    );
};

export default Header;