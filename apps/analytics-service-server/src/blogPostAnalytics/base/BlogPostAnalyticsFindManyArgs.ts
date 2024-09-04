/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogPostAnalyticsWhereInput } from "./BlogPostAnalyticsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlogPostAnalyticsOrderByInput } from "./BlogPostAnalyticsOrderByInput";

@ArgsType()
class BlogPostAnalyticsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlogPostAnalyticsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlogPostAnalyticsWhereInput, { nullable: true })
  @Type(() => BlogPostAnalyticsWhereInput)
  where?: BlogPostAnalyticsWhereInput;

  @ApiProperty({
    required: false,
    type: [BlogPostAnalyticsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlogPostAnalyticsOrderByInput], { nullable: true })
  @Type(() => BlogPostAnalyticsOrderByInput)
  orderBy?: Array<BlogPostAnalyticsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BlogPostAnalyticsFindManyArgs as BlogPostAnalyticsFindManyArgs };