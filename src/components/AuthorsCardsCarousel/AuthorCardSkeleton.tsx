import ContentLoader from "react-content-loader";

const AuthorCardSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={200}
            height={460}
            viewBox="0 0 200 460"
            backgroundColor="#6e6e6e"
            foregroundColor="#a3a3a3"
        >
            <rect x="0" y="35" rx="20" ry="20" width="200" height="200" />
            <rect x="0" y="251" rx="0" ry="0" width="169" height="20" />
            <rect x="0" y="284" rx="0" ry="0" width="173" height="40" />
            <rect x="0" y="342" rx="0" ry="0" width="69" height="15" />
        </ContentLoader>
    );
}

export default AuthorCardSkeleton;