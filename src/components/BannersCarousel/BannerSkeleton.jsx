import ContentLoader from "react-content-loader";

const BannerSkeleton = () => {
    return (
        <ContentLoader
            speed={5}
            width={656}
            height={268}
            viewBox="0 0 656 268"
            backgroundColor="#6e6e6e"
            foregroundColor="#a3a3a3"
        >
            <rect x="10" y="20" rx="2" ry="2" width="218" height="30" />
            <rect x="10" y="70" rx="0" ry="0" width="136" height="15" />
            <rect x="10" y="108" rx="0" ry="0" width="208" height="15" />
            <rect x="77" y="381" rx="0" ry="0" width="151" height="29" />
            <rect x="293" y="358" rx="0" ry="0" width="92" height="56" />
            <rect x="10" y="205" rx="18" ry="18" width="167" height="40" />
            <circle cx="211" cy="226" r="22" />
            <circle cx="270" cy="227" r="21" />
            <circle cx="634" cy="41" r="20" />
        </ContentLoader>
    );
}

export default BannerSkeleton;