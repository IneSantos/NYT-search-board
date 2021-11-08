import { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import Homepage from "../../components/pages/home/homepage";
import { getArticlesByPage, getArticlesWithTitle } from "../../services/api/api";
import "normalize.css";
import "./homepage.css";
import { Article } from "../../components/pages/article-page/article-type";

interface Props {
    articles: Article[],
    page: number,
    searchClicked: boolean
}

const HomePageView = ({articles, page, searchClicked}: Props) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [pageShown, setPageShown] = useState(page);
    
    const handleSearch = (e) => {
        const userInput = e.target.value;
        setInput(userInput);
    }

    useEffect(() => {
        if(pageShown === page) return;

        getArticlesByPage(page).then(data => {
            dispatch({ type: "SET_ARTICLE_LIST", payload: data});
            setPageShown(page);
        }).catch(err => console.log(err));
        
    }, [dispatch, page, articles, pageShown]);

    useEffect(() => {
        if(!searchClicked) return;

        getArticlesWithTitle(input).then(data => {
            dispatch({ type: "SET_ARTICLE_LIST", payload: data});
            dispatch({ type: "RESET_SEARCH_CLICKED"});
        }).catch(err => console.log(err));

    }, [dispatch, input, searchClicked])

    return <Homepage handleSearch={handleSearch} searchInput={input} articles={articles} />
}


const mapStateToProps = state => {
    return {
        articles: state.articleList,
        page: state.page,
        searchClicked: state.searchClicked
    };
};


export default connect(mapStateToProps)(HomePageView);