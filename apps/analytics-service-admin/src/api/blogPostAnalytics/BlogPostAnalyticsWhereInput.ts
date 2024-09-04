import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BlogPostAnalyticsWhereInput = {
  id?: StringFilter;
  likes?: IntNullableFilter;
  postId?: StringNullableFilter;
  views?: IntNullableFilter;
};
