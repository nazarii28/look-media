import ContentLoader from "react-content-loader";

const TrackListItemSkeleton = () => {
    return (
        <ContentLoader
            speed={5}
            width={655}
            height={70}
            viewBox="0 0 655 70"
            backgroundColor="#6e6e6e"
        >
            <circle cx="31" cy="96" r="15" />
            <rect x="54" y="28" rx="2" ry="2" width="99" height="16" />
            <circle cx="25" cy="36" r="18" />
            <rect x="167" y="28" rx="2" ry="2" width="99" height="16" />
            <circle cx="635" cy="37" r="10" />
        </ContentLoader>
    );
}

export default TrackListItemSkeleton;