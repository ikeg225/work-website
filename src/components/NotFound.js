import '../css/NotFound.css';

function NotFound() {
    document.title = "404";

    return (
        <div className="notFound">
            <h1>404</h1>
            <h2>Page Not Found.</h2>
        </div>
    )
}

export default NotFound;