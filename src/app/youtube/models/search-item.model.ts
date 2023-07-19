interface Thumbnail {
  url?: string;
  width?: number;
  height?: number;
}

interface LocalizedSnippet {
  title?: string;
  description?: string;
}

interface Pageinfo {
  totalResults?: number;
  resultsPerPage?: number;
}

interface Item {
  kind?: string;
  etag?: string;
  id?: {
    kind?: string;
    videoId?: string;
  };
  snippet?: VideoSnippet;
  statistics?: {
    viewCount?: string;
    likeCount?: string;
    dislikeCount?: string;
    favoriteCount?: string;
    commentCount?: string;
  };
}

interface VideoSnippet {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  thumbnails?: {
    default?: Thumbnail;
    medium?: Thumbnail;
    high?: Thumbnail;
    standard?: Thumbnail;
    maxres?: Thumbnail;
  };
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  localized?: LocalizedSnippet;
  defaultAudioLanguage?: string;
}

export { VideoSnippet, LocalizedSnippet, Thumbnail, Pageinfo, Item };
