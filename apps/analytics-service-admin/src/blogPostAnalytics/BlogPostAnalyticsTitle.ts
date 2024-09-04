import { BlogPostAnalytics as TBlogPostAnalytics } from "../api/blogPostAnalytics/BlogPostAnalytics";

export const BLOGPOSTANALYTICS_TITLE_FIELD = "postId";

export const BlogPostAnalyticsTitle = (record: TBlogPostAnalytics): string => {
  return record.postId?.toString() || String(record.id);
};
