import { IoSearchSharp } from "react-icons/io5";


const Navbar = (props) => {
    const {setSearchText, openSearchPage} = props;
    return(
    <nav className="homepage-nav">
        <h4>Amazon.in</h4>
        <p>
            Address:
            <br />
            LPU University
        </p>
        <div className="homepage-search-container">
            <select />
            <input type="text" onChange={(e)=>{
                setSearchText(e.target.value);
            }}></input>

            <button onClick={openSearchPage} className="homepage-search-icons">
                <IoSearchSharp />
            </button>
        </div>
        <h5>Profile</h5>
        <h5>Cart</h5>
    </nav>
    );
};

export default Navbar;