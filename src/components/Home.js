import ImageSlider from './ImageSlider';
import Search from './Search'

const Home = () => {

    const slides =[
        {url:'./slideshow1.jpeg', title:'Harry Poter'},
        {url:'./slideshow2.jpeg', title:'The Trail'},
        {url:'./slideshow3.jpg', title:'Keshtjella'},
        {url:'./slideshow4.jpeg', title:'Kucuk Prens'},
        {url:'./slideshow5.jpeg', title:'Fjalet e Qiririt'},
        {url:'./slideshow6.jpeg', title:'20 000 leagues under the sea'}
    ];

    const containerStyles ={
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <hr />
            <p>
                This website's goal is to make it easy finding books we want to read.
                <br />
                There is a saying that goes like this: "Book is the true bestfirend".
                We would like you to enjoy and have fun finding and reading your favorite books.
            </p>
            <picture className="pics">
                <img src="books1.jpeg" alt="Books" className="book"/>
                <img src="books2.jpeg" alt="Books" className="book"/>
                <img src="books3.jpeg" alt="Books" className="book"/>
            </picture>
            <div className="links">
                <p>We have provided some links to simular pages you can take a look.</p>
                <ul>
                    <li><a href="https://literaturaislame.com/">Literatura Islame</a> Shqip</li>
                    <li><a href="https://openlibrary.org/">Open Library</a> Anglisht</li>
                    <li><a href="https://dijital-kutuphane.mkutup.gov.tr/">Milli Kutuphane</a> Turqisht</li>
                </ul>
            </div>
            <div style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div>
            <div className='search'>
                <Search />
            </div>
        </div>
     );
}
 
export default Home;