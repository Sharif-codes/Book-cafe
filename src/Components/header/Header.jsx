import profile from '../../assets/img/pic-png-fade.png'
const Header = () => {
    
    return (
        <div className='md:flex justify-between p-4 border-b-2 max-w-7xl mx-auto'>
            <p className="text-4xl font-bold">Knowledge Cafe</p>
            <img className='w-12 rounded-full' src={profile} alt="" />   
        </div>
    );
};

export default Header;