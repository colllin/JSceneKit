'use strict'

import NSObject from '../ObjectiveC/NSObject'
import SCNAnimatable from './SCNAnimatable'
import SCNMatrix4 from './SCNMatrix4'
import SCNMatrix4MakeTranslation from './SCNMatrix4MakeTranslation'
import SCNWrapMode from './SCNWrapMode'
import SCNFilterMode from './SCNFilterMode'
import SKColor from '../SpriteKit/SKColor'


/**
 * A container for the color or texture of one of a material’s visual properties. 
 * @access public
 * @extends {NSObject}
 * @implements {SCNAnimatable}
 * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty
 */
export default class SCNMaterialProperty extends NSObject {
  static get _propTypes() {
    return {
      color: ['NSColor', 'contents'],
      image: ['NSMutableDictionary', (obj, dict, key, coder) => {
        const path = coder._directoryPath + dict.path
        console.log(`image.path: ${path}`)
        const image = new Image()
        image.onload = () => {
          obj.contents = image
        }
        // FIXME: needs directoryPath
        image.src = path
      }],
      intensity: 'float',
      // contentsTransform
      wrapS: 'integer',
      wrapT: 'integer',
      minificationFilter: 'integer',
      magnificationFilter: 'integer',
      mipFilter: 'integer',
      maxAnisotropy: 'float',
      mappingChannel: 'integer',
      borderColor: 'plist',

      propertyType: ['integer', null],
      parent: ['SCNMaterial', null],
      isCommonProfileProperty: ['boolean', null]
    }
  }

  // Creating a Material Property

  /**
   * Creates a new material property object with the specified contents.
   * @access public
   * @constructor
   * @param {Object} contents - The visual contents of the material property—a color, image, or source of animated content. For details, see the discussion of the  contents property.
   * @desc Newly created SCNMaterial objects contain SCNMaterialProperty instances for all of their visual properties. To change a material’s visual properties, you modify those instances rather than creating new material property objects.You create new SCNMaterialProperty instances to provide textures for use with custom GLSL shaders—for details, see SCNShadable.
   * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395386-init
   */
  constructor(contents) {
    super()

    //if(typeof contents !== 'object'){
    //  throw 'SCNMaterialProperty(contents): contents must be Object type: ' + (typeof contents)
    //}

    // Working with Material Property Contents

    /**
     * The visual contents of the material property—a color, image, or source of animated content. Animatable.
     * @type {?Object}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395372-contents
     */
    this.contents = contents

    /**
     * A number between 0.0 and 1.0 that modulates the effect of the material property. Animatable.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395407-intensity
     */
    this.intensity = 0


    // Configuring Texture Mapping Attributes

    /**
     * The transformation applied to the material property’s visual contents. Animatable.
     * @type {SCNMatrix4}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395388-contentstransform
     */
    this.contentsTransform = SCNMatrix4MakeTranslation(0, 0, 0)

    /**
     * The wrapping behavior for the S texture coordinate.
     * @type {SCNWrapMode}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395384-wraps
     */
    this.wrapS = SCNWrapMode.clamp

    /**
     * The wrapping behavior for the T texture coordinate.
     * @type {SCNWrapMode}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395382-wrapt
     */
    this.wrapT = SCNWrapMode.clamp

    /**
     * Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
     * @type {SCNFilterMode}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395390-minificationfilter
     */
    this.minificationFilter = SCNFilterMode.linear

    /**
     * Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
     * @type {SCNFilterMode}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395378-magnificationfilter
     */
    this.magnificationFilter = SCNFilterMode.linear

    /**
     * Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
     * @type {SCNFilterMode}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395398-mipfilter
     */
    this.mipFilter = SCNFilterMode.nearest

    /**
     * The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395402-maxanisotropy
     */
    this.maxAnisotropy = 0

    /**
     * The source of texture coordinates for mapping the material property’s image contents.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395405-mappingchannel
     */
    this.mappingChannel = 0

    /**
     * A color used to fill in areas of a material’s surface not covered by the material property’s image contents.
     * @type {?Object}
     * @deprecated
     * @see https://developer.apple.com/reference/scenekit/scnmaterialproperty/1395376-bordercolor
     */
    this.borderColor = null
  }

  /**
   * @access public
   * @param {NSCoder} coder -
   * @returns {SCNMaterialProperty}
   */
   /*
  static initWithCoder(coder) {
    const instance = new SCNMaterialProperty()
    instance._setValueWithCoder(coder)
    return instance
  }
  */

  /**
   * @access private
   * @param {NSCoder} coder -
   */
   /*
  _setValueWithCoder(coder) {
    this.minificationFilter = coder.decodeIntegerForKey('minificationFilter')
    const propertyType = coder.decodeIntegerForKey('propertyType')
    this.wrapT = coder.decodeIntegerForKey('wrapT')
    //const _parent = coder.decodeObjectForKey('parent')
    const isCommonProfileProperty = coder.decodeBoolForKey('isCommonProfileProperty')
    this.magnificationFilter = coder.decodeIntegerForKey('magnificationFilter')
    this.mipFilter = coder.decodeIntegerForKey('mipFilter')
    this.mappingChannel = coder.decodeIntegerForKey('mappingChannel')
    this.wrapS = coder.decodeIntegerForKey('wrapS')
    this.maxAnisotropy = coder.decodeFloatForKey('maxAnisotropy')
    this.intensity = coder.decodeFloatForKey('intensity')
  }
  */
 
  /**
   * @access public
   * @returns {Float32Array} -
   */
  float32Array() {
    if(this.contents instanceof SKColor){
      return this.contents.float32Array()
    }
    return new Float32Array([1, 1, 1, 1])
  }
}

