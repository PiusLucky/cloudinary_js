export var VERSION = "2.5.0";

export var CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";

export var OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";

export var AKAMAI_SHARED_CDN = "res.cloudinary.com";

export var SHARED_CDN = AKAMAI_SHARED_CDN;

export var DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};

export var DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];

export var SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};

/**
* @const {Object} Cloudinary.DEFAULT_IMAGE_PARAMS
* Defaults values for image parameters.
*
* (Previously defined using option_consume() )
 */
export var DEFAULT_IMAGE_PARAMS = {
  resource_type: "image",
  transformation: [],
  type: 'upload'
};

/**
* Defaults values for video parameters.
* @const {Object} Cloudinary.DEFAULT_VIDEO_PARAMS
* (Previously defined using option_consume() )
 */
export var DEFAULT_VIDEO_PARAMS = {
  fallback_content: '',
  resource_type: "video",
  source_transformation: {},
  source_types: DEFAULT_VIDEO_SOURCE_TYPES,
  transformation: [],
  type: 'upload'
};

/**
 * Recommended sources for video tag
 * @const {Object} Cloudinary.DEFAULT_VIDEO_SOURCES
 */
export const DEFAULT_VIDEO_SOURCES = [
  {
    type: "mp4",
    codecs: "hev1",
    transformations: {video_codec: "h265"}
  },
  {
    type: "webm",
    codecs: "vp9",
    transformations: {video_codec: "vp9"}
  },
  {
    type: "mp4",
    transformations: {video_codec: "auto"}
  },
  {
    type: "webm",
    transformations: {video_codec: "auto"}
  }
];

/**
 * Generates a pixel size image which color is the predominant color of the original image.
 */
const predominantColorTransformPixel = [
  {width: 'iw_div_2', aspect_ratio: 1, crop: 'pad', background: 'auto'},
  {crop: 'crop', width: 1, height: 1, gravity: 'north_east'},
  {fetch_format: 'auto', quality: 'auto'}];

/**
 * Generates an image which color is the predominant color of the original image.
 */
const predominantColorTransform  = [
  {variables: [['$currWidth', 'w'], ['$currHeight', 'h']]},
  {width: 'iw_div_2', aspect_ratio: 1, crop: 'pad', background: 'auto'},
  {crop: 'crop', width: 10, height: 10, gravity: 'north_east'},
  {width: '$currWidth', height: '$currHeight', crop: 'fill'},
  {fetch_format: 'auto', quality: 'auto'}];

/**
 * Predefined placeholder transformations
 * @const {Object} Cloudinary.PLACEHOLDER_IMAGE_OPTIONS
 */
export const PLACEHOLDER_IMAGE_OPTIONS = {
  'blur': () => [{effect: 'blur:2000', quality: 1, fetch_format: 'auto'}], // Default
  'pixelate': ()=> [{effect: 'pixelate', quality: 1, fetch_format: 'auto'}],
  'predominant-color': ({width, height}) => (
    width && height ? predominantColorTransformPixel : predominantColorTransform
  ),
  'vectorize': ()=> [{effect: 'vectorize:3:0.1', fetch_format: 'svg'}]
};

/**
 * The resource storage type
 * @typedef type
 * @enum {string}
 * @property  {string} 'upload' A resource uploaded directly to Cloudinary
 * @property  {string} 'fetch' A resource fetched by Cloudinary from a 3rd party storage
 * @property  {string} 'private'
 * @property  {string} 'authenticated'
 * @property  {string} 'sprite'
 * @property  {string} 'facebook'
 * @property  {string} 'twitter'
 * @property  {string} 'youtube'
 * @property  {string} 'vimeo'
 *
 */

/**
 * The resource type
 * @typedef resourceType
 * @enum {string}
 * @property {string} 'image' An image file
 * @property {string} 'video' A video file
 * @property {string} 'raw'   A raw file
 */