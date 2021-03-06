import NSColor from './AppKit/NSColor'
import NSColorSpaceModel from './AppKit/NSColorSpaceModel'
import AVAudioMixerNode from './AVFoundation/AVAudioMixerNode'
import AVAudioNode from './AVFoundation/AVAudioNode'
import CFAbsoluteTimeGetCurrent from './CoreFoundation/CFAbsoluteTimeGetCurrent'
import CGBlendMode from './CoreGraphics/CGBlendMode'
import CGLineCap from './CoreGraphics/CGLineCap'
import CGLineJoin from './CoreGraphics/CGLineJoin'
import CGMutablePath from './CoreGraphics/CGMutablePath'
import CGPath from './CoreGraphics/CGPath'
import CGPathApplierFunction from './CoreGraphics/CGPathApplierFunction'
import CGPathFillRule from './CoreGraphics/CGPathFillRule'
import CGPoint from './CoreGraphics/CGPoint'
import CGRect from './CoreGraphics/CGRect'
import CGSize from './CoreGraphics/CGSize'
import CGVector from './CoreGraphics/CGVector'
import DispatchObject from './Dispatch/DispatchObject'
import DispatchQueue from './Dispatch/DispatchQueue'
import DispatchTime from './Dispatch/DispatchTime'
import DispatchTimeInterval from './Dispatch/DispatchTimeInterval'
import NotificationCenter from './Foundation/NotificationCenter'
import NSArray from './Foundation/NSArray'
import NSCoder from './Foundation/NSCoder'
import NSColorSpace from './Foundation/NSColorSpace'
import NSData from './Foundation/NSData'
import NSDictionary from './Foundation/NSDictionary'
import NSKeyedArchiver from './Foundation/NSKeyedArchiver'
import NSKeyedUnarchiver from './Foundation/NSKeyedUnarchiver'
import NSMutableArray from './Foundation/NSMutableArray'
import NSMutableData from './Foundation/NSMutableData'
import NSMutableDictionary from './Foundation/NSMutableDictionary'
import NSNotification from './Foundation/NSNotification'
import NSURL from './Foundation/NSURL'
import NSValue from './Foundation/NSValue'
import GCController from './GameController/GCController'
import GCControllerAxisInput from './GameController/GCControllerAxisInput'
import GCControllerButtonInput from './GameController/GCControllerButtonInput'
import GCControllerDirectionPad from './GameController/GCControllerDirectionPad'
import GCControllerElement from './GameController/GCControllerElement'
import GCExtendedGamepad from './GameController/GCExtendedGamepad'
import GCGamepad from './GameController/GCGamepad'
import GCMicroGamepad from './GameController/GCMicroGamepad'
import GKAgent from './GameplayKit/GKAgent'
import GKAgent2D from './GameplayKit/GKAgent2D'
import GKAgentDelegate from './GameplayKit/GKAgentDelegate'
import GKBehavior from './GameplayKit/GKBehavior'
import GKComponent from './GameplayKit/GKComponent'
import GKEntity from './GameplayKit/GKEntity'
import GKGoal from './GameplayKit/GKGoal'
import GKPath from './GameplayKit/GKPath'
import GKScene from './GameplayKit/GKScene'
import GKSCNNodeComponent from './GameplayKit/GKSCNNodeComponent'
import MTLTessellationPartitionMode from './Metal/MTLTessellationPartitionMode'
import NSObject from './ObjectiveC/NSObject'
import CAAction from './QuartzCore/CAAction'
import CAAnimation from './QuartzCore/CAAnimation'
import CAAnimationDelegate from './QuartzCore/CAAnimationDelegate'
import CAAnimationGroup from './QuartzCore/CAAnimationGroup'
import CABasicAnimation from './QuartzCore/CABasicAnimation'
import CACurrentMediaTime from './QuartzCore/CACurrentMediaTime'
import CAKeyframeAnimation from './QuartzCore/CAKeyframeAnimation'
import CAMediaTiming from './QuartzCore/CAMediaTiming'
import CAMediaTimingFunction from './QuartzCore/CAMediaTimingFunction'
import CAPropertyAnimation from './QuartzCore/CAPropertyAnimation'
import CATransform3D from './QuartzCore/CATransform3D'
import _SCNDefaultFragmentShader from './SceneKit/_SCNDefaultFragmentShader'
import _SCNDefaultHitTestFragmentShader from './SceneKit/_SCNDefaultHitTestFragmentShader'
import _SCNDefaultHitTestVertexShader from './SceneKit/_SCNDefaultHitTestVertexShader'
import _SCNDefaultParticleFragmentShader from './SceneKit/_SCNDefaultParticleFragmentShader'
import _SCNDefaultParticleVertexShader from './SceneKit/_SCNDefaultParticleVertexShader'
import _SCNDefaultPBRFragmentShader from './SceneKit/_SCNDefaultPBRFragmentShader'
import _SCNDefaultShadowFragmentShader from './SceneKit/_SCNDefaultShadowFragmentShader'
import _SCNDefaultShadowVertexShader from './SceneKit/_SCNDefaultShadowVertexShader'
import _SCNDefaultVertexShader from './SceneKit/_SCNDefaultVertexShader'
import SCNAccelerationConstraint from './SceneKit/SCNAccelerationConstraint'
import SCNAction from './SceneKit/SCNAction'
import SCNActionable from './SceneKit/SCNActionable'
import SCNActionCustom from './SceneKit/SCNActionCustom'
import SCNActionFade from './SceneKit/SCNActionFade'
import SCNActionGroup from './SceneKit/SCNActionGroup'
import SCNActionHide from './SceneKit/SCNActionHide'
import SCNActionJavaScript from './SceneKit/SCNActionJavaScript'
import SCNActionMove from './SceneKit/SCNActionMove'
import SCNActionPerformSelector from './SceneKit/SCNActionPerformSelector'
import SCNActionPlaySound from './SceneKit/SCNActionPlaySound'
import SCNActionReference from './SceneKit/SCNActionReference'
import SCNActionRemove from './SceneKit/SCNActionRemove'
import SCNActionRepeat from './SceneKit/SCNActionRepeat'
import SCNActionRotate from './SceneKit/SCNActionRotate'
import SCNActionRunAction from './SceneKit/SCNActionRunAction'
import SCNActionRunBlock from './SceneKit/SCNActionRunBlock'
import SCNActionScale from './SceneKit/SCNActionScale'
import SCNActionSequence from './SceneKit/SCNActionSequence'
import SCNActionTimingFunction from './SceneKit/SCNActionTimingFunction'
import SCNActionTimingMode from './SceneKit/SCNActionTimingMode'
import SCNActionWait from './SceneKit/SCNActionWait'
import SCNAnimatable from './SceneKit/SCNAnimatable'
import SCNAnimation from './SceneKit/SCNAnimation'
import SCNAnimationEvent from './SceneKit/SCNAnimationEvent'
import SCNAnimationEventBlock from './SceneKit/SCNAnimationEventBlock'
import SCNAnimationPlayer from './SceneKit/SCNAnimationPlayer'
import SCNAntialiasingMode from './SceneKit/SCNAntialiasingMode'
import SCNAudioPlayer from './SceneKit/SCNAudioPlayer'
import SCNAudioSource from './SceneKit/SCNAudioSource'
import SCNBillboardAxis from './SceneKit/SCNBillboardAxis'
import SCNBillboardConstraint from './SceneKit/SCNBillboardConstraint'
import SCNBindingBlock from './SceneKit/SCNBindingBlock'
import SCNBlendMode from './SceneKit/SCNBlendMode'
import SCNBoundingVolume from './SceneKit/SCNBoundingVolume'
import SCNBox from './SceneKit/SCNBox'
import SCNBufferBindingBlock from './SceneKit/SCNBufferBindingBlock'
import SCNBufferFrequency from './SceneKit/SCNBufferFrequency'
import SCNBufferStream from './SceneKit/SCNBufferStream'
import SCNCamera from './SceneKit/SCNCamera'
import SCNCameraProjectionDirection from './SceneKit/SCNCameraProjectionDirection'
import SCNCapsule from './SceneKit/SCNCapsule'
import SCNChamferMode from './SceneKit/SCNChamferMode'
import SCNColorMask from './SceneKit/SCNColorMask'
import SCNCone from './SceneKit/SCNCone'
import SCNConstraint from './SceneKit/SCNConstraint'
import SCNCullMode from './SceneKit/SCNCullMode'
import SCNCylinder from './SceneKit/SCNCylinder'
import SCNDebugOptions from './SceneKit/SCNDebugOptions'
import SCNDistanceConstraint from './SceneKit/SCNDistanceConstraint'
import SCNFieldForceEvaluator from './SceneKit/SCNFieldForceEvaluator'
import SCNFillMode from './SceneKit/SCNFillMode'
import SCNFilterMode from './SceneKit/SCNFilterMode'
import SCNFloor from './SceneKit/SCNFloor'
import SCNGeometry from './SceneKit/SCNGeometry'
import SCNGeometryElement from './SceneKit/SCNGeometryElement'
import SCNGeometryPrimitiveType from './SceneKit/SCNGeometryPrimitiveType'
import SCNGeometrySource from './SceneKit/SCNGeometrySource'
import SCNGeometryTessellator from './SceneKit/SCNGeometryTessellator'
import SCNHitTestOption from './SceneKit/SCNHitTestOption'
import SCNHitTestResult from './SceneKit/SCNHitTestResult'
import SCNIKConstraint from './SceneKit/SCNIKConstraint'
import SCNLayer from './SceneKit/SCNLayer'
import SCNLevelOfDetail from './SceneKit/SCNLevelOfDetail'
import SCNLight from './SceneKit/SCNLight'
import SCNLookAtConstraint from './SceneKit/SCNLookAtConstraint'
import SCNMaterial from './SceneKit/SCNMaterial'
import SCNMaterialProperty from './SceneKit/SCNMaterialProperty'
import SCNMatrix4 from './SceneKit/SCNMatrix4'
import SCNMatrix4EqualToMatrix4 from './SceneKit/SCNMatrix4EqualToMatrix4'
import SCNMatrix4FromGLKMatrix4 from './SceneKit/SCNMatrix4FromGLKMatrix4'
import SCNMatrix4FromMat4 from './SceneKit/SCNMatrix4FromMat4'
import SCNMatrix4Invert from './SceneKit/SCNMatrix4Invert'
import SCNMatrix4IsIdentity from './SceneKit/SCNMatrix4IsIdentity'
import SCNMatrix4MakeRotation from './SceneKit/SCNMatrix4MakeRotation'
import SCNMatrix4MakeScale from './SceneKit/SCNMatrix4MakeScale'
import SCNMatrix4MakeTranslation from './SceneKit/SCNMatrix4MakeTranslation'
import SCNMatrix4Mult from './SceneKit/SCNMatrix4Mult'
import SCNMatrix4Rotate from './SceneKit/SCNMatrix4Rotate'
import SCNMatrix4Scale from './SceneKit/SCNMatrix4Scale'
import SCNMatrix4ToGLKMatrix4 from './SceneKit/SCNMatrix4ToGLKMatrix4'
import SCNMatrix4ToMat4 from './SceneKit/SCNMatrix4ToMat4'
import SCNMatrix4Translate from './SceneKit/SCNMatrix4Translate'
import SCNMorpher from './SceneKit/SCNMorpher'
import SCNMorpherCalculationMode from './SceneKit/SCNMorpherCalculationMode'
import SCNMovabilityHint from './SceneKit/SCNMovabilityHint'
import SCNNode from './SceneKit/SCNNode'
import SCNNodeRendererDelegate from './SceneKit/SCNNodeRendererDelegate'
import SCNOrderedDictionary from './SceneKit/SCNOrderedDictionary'
import SCNParticleBirthDirection from './SceneKit/SCNParticleBirthDirection'
import SCNParticleBirthLocation from './SceneKit/SCNParticleBirthLocation'
import SCNParticleBlendMode from './SceneKit/SCNParticleBlendMode'
import SCNParticleEvent from './SceneKit/SCNParticleEvent'
import SCNParticleEventBlock from './SceneKit/SCNParticleEventBlock'
import SCNParticleImageSequenceAnimationMode from './SceneKit/SCNParticleImageSequenceAnimationMode'
import SCNParticleInputMode from './SceneKit/SCNParticleInputMode'
import SCNParticleModifierBlock from './SceneKit/SCNParticleModifierBlock'
import SCNParticleModifierStage from './SceneKit/SCNParticleModifierStage'
import SCNParticleOrientationMode from './SceneKit/SCNParticleOrientationMode'
import SCNParticlePropertyController from './SceneKit/SCNParticlePropertyController'
import SCNParticleSortingMode from './SceneKit/SCNParticleSortingMode'
import SCNParticleSystem from './SceneKit/SCNParticleSystem'
import SCNPhysicsBallSocketJoint from './SceneKit/SCNPhysicsBallSocketJoint'
import SCNPhysicsBehavior from './SceneKit/SCNPhysicsBehavior'
import SCNPhysicsBody from './SceneKit/SCNPhysicsBody'
import SCNPhysicsBodyType from './SceneKit/SCNPhysicsBodyType'
import SCNPhysicsCollisionCategory from './SceneKit/SCNPhysicsCollisionCategory'
import SCNPhysicsContact from './SceneKit/SCNPhysicsContact'
import SCNPhysicsContactDelegate from './SceneKit/SCNPhysicsContactDelegate'
import SCNPhysicsField from './SceneKit/SCNPhysicsField'
import SCNPhysicsFieldScope from './SceneKit/SCNPhysicsFieldScope'
import SCNPhysicsHingeJoint from './SceneKit/SCNPhysicsHingeJoint'
import SCNPhysicsNoiseField from './SceneKit/SCNPhysicsNoiseField'
import SCNPhysicsShape from './SceneKit/SCNPhysicsShape'
import SCNPhysicsSliderJoint from './SceneKit/SCNPhysicsSliderJoint'
import SCNPhysicsTurbulenceField from './SceneKit/SCNPhysicsTurbulenceField'
import SCNPhysicsVehicle from './SceneKit/SCNPhysicsVehicle'
import SCNPhysicsVehicleWheel from './SceneKit/SCNPhysicsVehicleWheel'
import SCNPhysicsWorld from './SceneKit/SCNPhysicsWorld'
import SCNPlane from './SceneKit/SCNPlane'
import SCNProgram from './SceneKit/SCNProgram'
import SCNProgramDelegate from './SceneKit/SCNProgramDelegate'
import SCNPyramid from './SceneKit/SCNPyramid'
import SCNQuaternion from './SceneKit/SCNQuaternion'
import SCNReferenceLoadingPolicy from './SceneKit/SCNReferenceLoadingPolicy'
import SCNReferenceNode from './SceneKit/SCNReferenceNode'
import SCNRenderer from './SceneKit/SCNRenderer'
import SCNRenderingAPI from './SceneKit/SCNRenderingAPI'
import SCNScene from './SceneKit/SCNScene'
import SCNSceneExportDelegate from './SceneKit/SCNSceneExportDelegate'
import SCNSceneExportProgressHandler from './SceneKit/SCNSceneExportProgressHandler'
import SCNSceneRenderer from './SceneKit/SCNSceneRenderer'
import SCNSceneRendererDelegate from './SceneKit/SCNSceneRendererDelegate'
import SCNSceneSource from './SceneKit/SCNSceneSource'
import SCNSceneSourceStatus from './SceneKit/SCNSceneSourceStatus'
import SCNSceneSourceStatusHandler from './SceneKit/SCNSceneSourceStatusHandler'
import SCNShadable from './SceneKit/SCNShadable'
import SCNShadableHelper from './SceneKit/SCNShadableHelper'
import SCNShaderModifierEntryPoint from './SceneKit/SCNShaderModifierEntryPoint'
import SCNShadowMode from './SceneKit/SCNShadowMode'
import SCNShape from './SceneKit/SCNShape'
import SCNSkinner from './SceneKit/SCNSkinner'
import SCNSphere from './SceneKit/SCNSphere'
import SCNTechnique from './SceneKit/SCNTechnique'
import SCNTechniqueSupport from './SceneKit/SCNTechniqueSupport'
import SCNTessellationSmoothingMode from './SceneKit/SCNTessellationSmoothingMode'
import SCNText from './SceneKit/SCNText'
import SCNTimingFunction from './SceneKit/SCNTimingFunction'
import SCNTorus from './SceneKit/SCNTorus'
import SCNTransaction from './SceneKit/SCNTransaction'
import SCNTransformConstraint from './SceneKit/SCNTransformConstraint'
import SCNTransparencyMode from './SceneKit/SCNTransparencyMode'
import SCNTube from './SceneKit/SCNTube'
import SCNVector3 from './SceneKit/SCNVector3'
import SCNVector3EqualToVector3 from './SceneKit/SCNVector3EqualToVector3'
import SCNVector3FromFloat3 from './SceneKit/SCNVector3FromFloat3'
import SCNVector3FromGLKVector3 from './SceneKit/SCNVector3FromGLKVector3'
import SCNVector3Make from './SceneKit/SCNVector3Make'
import SCNVector3ToFloat3 from './SceneKit/SCNVector3ToFloat3'
import SCNVector3ToGLKVector3 from './SceneKit/SCNVector3ToGLKVector3'
import SCNVector3Zero from './SceneKit/SCNVector3Zero'
import SCNVector4 from './SceneKit/SCNVector4'
import SCNVector4EqualToVector4 from './SceneKit/SCNVector4EqualToVector4'
import SCNVector4FromFloat4 from './SceneKit/SCNVector4FromFloat4'
import SCNVector4FromGLKVector4 from './SceneKit/SCNVector4FromGLKVector4'
import SCNVector4Make from './SceneKit/SCNVector4Make'
import SCNVector4ToFloat4 from './SceneKit/SCNVector4ToFloat4'
import SCNVector4ToGLKVector4 from './SceneKit/SCNVector4ToGLKVector4'
import SCNView from './SceneKit/SCNView'
import SCNWrapMode from './SceneKit/SCNWrapMode'
import SKAction from './SpriteKit/SKAction'
import SKActionTimingMode from './SpriteKit/SKActionTimingMode'
import SKBlendMode from './SpriteKit/SKBlendMode'
import SKColor from './SpriteKit/SKColor'
import SKEffectNode from './SpriteKit/SKEffectNode'
import SKFade from './SpriteKit/SKFade'
import SKGroup from './SpriteKit/SKGroup'
import SKLabelHorizontalAlignmentMode from './SpriteKit/SKLabelHorizontalAlignmentMode'
import SKLabelNode from './SpriteKit/SKLabelNode'
import SKLabelVerticalAlignmentMode from './SpriteKit/SKLabelVerticalAlignmentMode'
import SKNode from './SpriteKit/SKNode'
import SKRepeat from './SpriteKit/SKRepeat'
import SKScale from './SpriteKit/SKScale'
import SKScene from './SpriteKit/SKScene'
import SKSceneScaleMode from './SpriteKit/SKSceneScaleMode'
import SKSequence from './SpriteKit/SKSequence'
import SKShapeNode from './SpriteKit/SKShapeNode'
import SKSpriteNode from './SpriteKit/SKSpriteNode'
import SKTexture from './SpriteKit/SKTexture'
import SKTextureFilteringMode from './SpriteKit/SKTextureFilteringMode'
import SKWait from './SpriteKit/SKWait'
import _AjaxRequest from './util/_AjaxRequest'
import _BinaryReader from './util/_BinaryReader'
import _BinaryRequest from './util/_BinaryRequest'
import _Buffer from './util/_Buffer'
import _ClassList from './util/_ClassList'
import _File from './util/_File'
import _FileReader from './util/_FileReader'
import _HTMLCanvasElement from './util/_HTMLCanvasElement'
import _InstanceOf from './util/_InstanceOf'

_ClassList.registerClass(NSColor, 'NSColor')
_ClassList.registerClass(NSColorSpaceModel, 'NSColorSpaceModel')
_ClassList.registerClass(AVAudioMixerNode, 'AVAudioMixerNode')
_ClassList.registerClass(AVAudioNode, 'AVAudioNode')
_ClassList.registerClass(CFAbsoluteTimeGetCurrent, 'CFAbsoluteTimeGetCurrent')
_ClassList.registerClass(CGBlendMode, 'CGBlendMode')
_ClassList.registerClass(CGLineCap, 'CGLineCap')
_ClassList.registerClass(CGLineJoin, 'CGLineJoin')
_ClassList.registerClass(CGMutablePath, 'CGMutablePath')
_ClassList.registerClass(CGPath, 'CGPath')
_ClassList.registerClass(CGPathApplierFunction, 'CGPathApplierFunction')
_ClassList.registerClass(CGPathFillRule, 'CGPathFillRule')
_ClassList.registerClass(CGPoint, 'CGPoint')
_ClassList.registerClass(CGRect, 'CGRect')
_ClassList.registerClass(CGSize, 'CGSize')
_ClassList.registerClass(CGVector, 'CGVector')
_ClassList.registerClass(DispatchObject, 'DispatchObject')
_ClassList.registerClass(DispatchQueue, 'DispatchQueue')
_ClassList.registerClass(DispatchTime, 'DispatchTime')
_ClassList.registerClass(DispatchTimeInterval, 'DispatchTimeInterval')
_ClassList.registerClass(NotificationCenter, 'NotificationCenter')
_ClassList.registerClass(NSArray, 'NSArray')
_ClassList.registerClass(NSCoder, 'NSCoder')
_ClassList.registerClass(NSColorSpace, 'NSColorSpace')
_ClassList.registerClass(NSData, 'NSData')
_ClassList.registerClass(NSDictionary, 'NSDictionary')
_ClassList.registerClass(NSKeyedArchiver, 'NSKeyedArchiver')
_ClassList.registerClass(NSKeyedUnarchiver, 'NSKeyedUnarchiver')
_ClassList.registerClass(NSMutableArray, 'NSMutableArray')
_ClassList.registerClass(NSMutableData, 'NSMutableData')
_ClassList.registerClass(NSMutableDictionary, 'NSMutableDictionary')
_ClassList.registerClass(NSNotification, 'NSNotification')
_ClassList.registerClass(NSURL, 'NSURL')
_ClassList.registerClass(NSValue, 'NSValue')
_ClassList.registerClass(GCController, 'GCController')
_ClassList.registerClass(GCControllerAxisInput, 'GCControllerAxisInput')
_ClassList.registerClass(GCControllerButtonInput, 'GCControllerButtonInput')
_ClassList.registerClass(GCControllerDirectionPad, 'GCControllerDirectionPad')
_ClassList.registerClass(GCControllerElement, 'GCControllerElement')
_ClassList.registerClass(GCExtendedGamepad, 'GCExtendedGamepad')
_ClassList.registerClass(GCGamepad, 'GCGamepad')
_ClassList.registerClass(GCMicroGamepad, 'GCMicroGamepad')
_ClassList.registerClass(GKAgent, 'GKAgent')
_ClassList.registerClass(GKAgent2D, 'GKAgent2D')
_ClassList.registerClass(GKAgentDelegate, 'GKAgentDelegate')
_ClassList.registerClass(GKBehavior, 'GKBehavior')
_ClassList.registerClass(GKComponent, 'GKComponent')
_ClassList.registerClass(GKEntity, 'GKEntity')
_ClassList.registerClass(GKGoal, 'GKGoal')
_ClassList.registerClass(GKPath, 'GKPath')
_ClassList.registerClass(GKScene, 'GKScene')
_ClassList.registerClass(GKSCNNodeComponent, 'GKSCNNodeComponent')
_ClassList.registerClass(MTLTessellationPartitionMode, 'MTLTessellationPartitionMode')
_ClassList.registerClass(NSObject, 'NSObject')
_ClassList.registerClass(CAAction, 'CAAction')
_ClassList.registerClass(CAAnimation, 'CAAnimation')
_ClassList.registerClass(CAAnimationDelegate, 'CAAnimationDelegate')
_ClassList.registerClass(CAAnimationGroup, 'CAAnimationGroup')
_ClassList.registerClass(CABasicAnimation, 'CABasicAnimation')
_ClassList.registerClass(CACurrentMediaTime, 'CACurrentMediaTime')
_ClassList.registerClass(CAKeyframeAnimation, 'CAKeyframeAnimation')
_ClassList.registerClass(CAMediaTiming, 'CAMediaTiming')
_ClassList.registerClass(CAMediaTimingFunction, 'CAMediaTimingFunction')
_ClassList.registerClass(CAPropertyAnimation, 'CAPropertyAnimation')
_ClassList.registerClass(CATransform3D, 'CATransform3D')
_ClassList.registerClass(_SCNDefaultFragmentShader, '_SCNDefaultFragmentShader')
_ClassList.registerClass(_SCNDefaultHitTestFragmentShader, '_SCNDefaultHitTestFragmentShader')
_ClassList.registerClass(_SCNDefaultHitTestVertexShader, '_SCNDefaultHitTestVertexShader')
_ClassList.registerClass(_SCNDefaultParticleFragmentShader, '_SCNDefaultParticleFragmentShader')
_ClassList.registerClass(_SCNDefaultParticleVertexShader, '_SCNDefaultParticleVertexShader')
_ClassList.registerClass(_SCNDefaultPBRFragmentShader, '_SCNDefaultPBRFragmentShader')
_ClassList.registerClass(_SCNDefaultShadowFragmentShader, '_SCNDefaultShadowFragmentShader')
_ClassList.registerClass(_SCNDefaultShadowVertexShader, '_SCNDefaultShadowVertexShader')
_ClassList.registerClass(_SCNDefaultVertexShader, '_SCNDefaultVertexShader')
_ClassList.registerClass(SCNAccelerationConstraint, 'SCNAccelerationConstraint')
_ClassList.registerClass(SCNAction, 'SCNAction')
_ClassList.registerClass(SCNActionable, 'SCNActionable')
_ClassList.registerClass(SCNActionCustom, 'SCNActionCustom')
_ClassList.registerClass(SCNActionFade, 'SCNActionFade')
_ClassList.registerClass(SCNActionGroup, 'SCNActionGroup')
_ClassList.registerClass(SCNActionHide, 'SCNActionHide')
_ClassList.registerClass(SCNActionJavaScript, 'SCNActionJavaScript')
_ClassList.registerClass(SCNActionMove, 'SCNActionMove')
_ClassList.registerClass(SCNActionPerformSelector, 'SCNActionPerformSelector')
_ClassList.registerClass(SCNActionPlaySound, 'SCNActionPlaySound')
_ClassList.registerClass(SCNActionReference, 'SCNActionReference')
_ClassList.registerClass(SCNActionRemove, 'SCNActionRemove')
_ClassList.registerClass(SCNActionRepeat, 'SCNActionRepeat')
_ClassList.registerClass(SCNActionRotate, 'SCNActionRotate')
_ClassList.registerClass(SCNActionRunAction, 'SCNActionRunAction')
_ClassList.registerClass(SCNActionRunBlock, 'SCNActionRunBlock')
_ClassList.registerClass(SCNActionScale, 'SCNActionScale')
_ClassList.registerClass(SCNActionSequence, 'SCNActionSequence')
_ClassList.registerClass(SCNActionTimingFunction, 'SCNActionTimingFunction')
_ClassList.registerClass(SCNActionTimingMode, 'SCNActionTimingMode')
_ClassList.registerClass(SCNActionWait, 'SCNActionWait')
_ClassList.registerClass(SCNAnimatable, 'SCNAnimatable')
_ClassList.registerClass(SCNAnimation, 'SCNAnimation')
_ClassList.registerClass(SCNAnimationEvent, 'SCNAnimationEvent')
_ClassList.registerClass(SCNAnimationEventBlock, 'SCNAnimationEventBlock')
_ClassList.registerClass(SCNAnimationPlayer, 'SCNAnimationPlayer')
_ClassList.registerClass(SCNAntialiasingMode, 'SCNAntialiasingMode')
_ClassList.registerClass(SCNAudioPlayer, 'SCNAudioPlayer')
_ClassList.registerClass(SCNAudioSource, 'SCNAudioSource')
_ClassList.registerClass(SCNBillboardAxis, 'SCNBillboardAxis')
_ClassList.registerClass(SCNBillboardConstraint, 'SCNBillboardConstraint')
_ClassList.registerClass(SCNBindingBlock, 'SCNBindingBlock')
_ClassList.registerClass(SCNBlendMode, 'SCNBlendMode')
_ClassList.registerClass(SCNBoundingVolume, 'SCNBoundingVolume')
_ClassList.registerClass(SCNBox, 'SCNBox')
_ClassList.registerClass(SCNBufferBindingBlock, 'SCNBufferBindingBlock')
_ClassList.registerClass(SCNBufferFrequency, 'SCNBufferFrequency')
_ClassList.registerClass(SCNBufferStream, 'SCNBufferStream')
_ClassList.registerClass(SCNCamera, 'SCNCamera')
_ClassList.registerClass(SCNCameraProjectionDirection, 'SCNCameraProjectionDirection')
_ClassList.registerClass(SCNCapsule, 'SCNCapsule')
_ClassList.registerClass(SCNChamferMode, 'SCNChamferMode')
_ClassList.registerClass(SCNColorMask, 'SCNColorMask')
_ClassList.registerClass(SCNCone, 'SCNCone')
_ClassList.registerClass(SCNConstraint, 'SCNConstraint')
_ClassList.registerClass(SCNCullMode, 'SCNCullMode')
_ClassList.registerClass(SCNCylinder, 'SCNCylinder')
_ClassList.registerClass(SCNDebugOptions, 'SCNDebugOptions')
_ClassList.registerClass(SCNDistanceConstraint, 'SCNDistanceConstraint')
_ClassList.registerClass(SCNFieldForceEvaluator, 'SCNFieldForceEvaluator')
_ClassList.registerClass(SCNFillMode, 'SCNFillMode')
_ClassList.registerClass(SCNFilterMode, 'SCNFilterMode')
_ClassList.registerClass(SCNFloor, 'SCNFloor')
_ClassList.registerClass(SCNGeometry, 'SCNGeometry')
_ClassList.registerClass(SCNGeometryElement, 'SCNGeometryElement')
_ClassList.registerClass(SCNGeometryPrimitiveType, 'SCNGeometryPrimitiveType')
_ClassList.registerClass(SCNGeometrySource, 'SCNGeometrySource')
_ClassList.registerClass(SCNGeometryTessellator, 'SCNGeometryTessellator')
_ClassList.registerClass(SCNHitTestOption, 'SCNHitTestOption')
_ClassList.registerClass(SCNHitTestResult, 'SCNHitTestResult')
_ClassList.registerClass(SCNIKConstraint, 'SCNIKConstraint')
_ClassList.registerClass(SCNLayer, 'SCNLayer')
_ClassList.registerClass(SCNLevelOfDetail, 'SCNLevelOfDetail')
_ClassList.registerClass(SCNLight, 'SCNLight')
_ClassList.registerClass(SCNLookAtConstraint, 'SCNLookAtConstraint')
_ClassList.registerClass(SCNMaterial, 'SCNMaterial')
_ClassList.registerClass(SCNMaterialProperty, 'SCNMaterialProperty')
_ClassList.registerClass(SCNMatrix4, 'SCNMatrix4')
_ClassList.registerClass(SCNMatrix4EqualToMatrix4, 'SCNMatrix4EqualToMatrix4')
_ClassList.registerClass(SCNMatrix4FromGLKMatrix4, 'SCNMatrix4FromGLKMatrix4')
_ClassList.registerClass(SCNMatrix4FromMat4, 'SCNMatrix4FromMat4')
_ClassList.registerClass(SCNMatrix4Invert, 'SCNMatrix4Invert')
_ClassList.registerClass(SCNMatrix4IsIdentity, 'SCNMatrix4IsIdentity')
_ClassList.registerClass(SCNMatrix4MakeRotation, 'SCNMatrix4MakeRotation')
_ClassList.registerClass(SCNMatrix4MakeScale, 'SCNMatrix4MakeScale')
_ClassList.registerClass(SCNMatrix4MakeTranslation, 'SCNMatrix4MakeTranslation')
_ClassList.registerClass(SCNMatrix4Mult, 'SCNMatrix4Mult')
_ClassList.registerClass(SCNMatrix4Rotate, 'SCNMatrix4Rotate')
_ClassList.registerClass(SCNMatrix4Scale, 'SCNMatrix4Scale')
_ClassList.registerClass(SCNMatrix4ToGLKMatrix4, 'SCNMatrix4ToGLKMatrix4')
_ClassList.registerClass(SCNMatrix4ToMat4, 'SCNMatrix4ToMat4')
_ClassList.registerClass(SCNMatrix4Translate, 'SCNMatrix4Translate')
_ClassList.registerClass(SCNMorpher, 'SCNMorpher')
_ClassList.registerClass(SCNMorpherCalculationMode, 'SCNMorpherCalculationMode')
_ClassList.registerClass(SCNMovabilityHint, 'SCNMovabilityHint')
_ClassList.registerClass(SCNNode, 'SCNNode')
_ClassList.registerClass(SCNNodeRendererDelegate, 'SCNNodeRendererDelegate')
_ClassList.registerClass(SCNOrderedDictionary, 'SCNOrderedDictionary')
_ClassList.registerClass(SCNParticleBirthDirection, 'SCNParticleBirthDirection')
_ClassList.registerClass(SCNParticleBirthLocation, 'SCNParticleBirthLocation')
_ClassList.registerClass(SCNParticleBlendMode, 'SCNParticleBlendMode')
_ClassList.registerClass(SCNParticleEvent, 'SCNParticleEvent')
_ClassList.registerClass(SCNParticleEventBlock, 'SCNParticleEventBlock')
_ClassList.registerClass(SCNParticleImageSequenceAnimationMode, 'SCNParticleImageSequenceAnimationMode')
_ClassList.registerClass(SCNParticleInputMode, 'SCNParticleInputMode')
_ClassList.registerClass(SCNParticleModifierBlock, 'SCNParticleModifierBlock')
_ClassList.registerClass(SCNParticleModifierStage, 'SCNParticleModifierStage')
_ClassList.registerClass(SCNParticleOrientationMode, 'SCNParticleOrientationMode')
_ClassList.registerClass(SCNParticlePropertyController, 'SCNParticlePropertyController')
_ClassList.registerClass(SCNParticleSortingMode, 'SCNParticleSortingMode')
_ClassList.registerClass(SCNParticleSystem, 'SCNParticleSystem')
_ClassList.registerClass(SCNPhysicsBallSocketJoint, 'SCNPhysicsBallSocketJoint')
_ClassList.registerClass(SCNPhysicsBehavior, 'SCNPhysicsBehavior')
_ClassList.registerClass(SCNPhysicsBody, 'SCNPhysicsBody')
_ClassList.registerClass(SCNPhysicsBodyType, 'SCNPhysicsBodyType')
_ClassList.registerClass(SCNPhysicsCollisionCategory, 'SCNPhysicsCollisionCategory')
_ClassList.registerClass(SCNPhysicsContact, 'SCNPhysicsContact')
_ClassList.registerClass(SCNPhysicsContactDelegate, 'SCNPhysicsContactDelegate')
_ClassList.registerClass(SCNPhysicsField, 'SCNPhysicsField')
_ClassList.registerClass(SCNPhysicsFieldScope, 'SCNPhysicsFieldScope')
_ClassList.registerClass(SCNPhysicsHingeJoint, 'SCNPhysicsHingeJoint')
_ClassList.registerClass(SCNPhysicsNoiseField, 'SCNPhysicsNoiseField')
_ClassList.registerClass(SCNPhysicsShape, 'SCNPhysicsShape')
_ClassList.registerClass(SCNPhysicsSliderJoint, 'SCNPhysicsSliderJoint')
_ClassList.registerClass(SCNPhysicsTurbulenceField, 'SCNPhysicsTurbulenceField')
_ClassList.registerClass(SCNPhysicsVehicle, 'SCNPhysicsVehicle')
_ClassList.registerClass(SCNPhysicsVehicleWheel, 'SCNPhysicsVehicleWheel')
_ClassList.registerClass(SCNPhysicsWorld, 'SCNPhysicsWorld')
_ClassList.registerClass(SCNPlane, 'SCNPlane')
_ClassList.registerClass(SCNProgram, 'SCNProgram')
_ClassList.registerClass(SCNProgramDelegate, 'SCNProgramDelegate')
_ClassList.registerClass(SCNPyramid, 'SCNPyramid')
_ClassList.registerClass(SCNQuaternion, 'SCNQuaternion')
_ClassList.registerClass(SCNReferenceLoadingPolicy, 'SCNReferenceLoadingPolicy')
_ClassList.registerClass(SCNReferenceNode, 'SCNReferenceNode')
_ClassList.registerClass(SCNRenderer, 'SCNRenderer')
_ClassList.registerClass(SCNRenderingAPI, 'SCNRenderingAPI')
_ClassList.registerClass(SCNScene, 'SCNScene')
_ClassList.registerClass(SCNSceneExportDelegate, 'SCNSceneExportDelegate')
_ClassList.registerClass(SCNSceneExportProgressHandler, 'SCNSceneExportProgressHandler')
_ClassList.registerClass(SCNSceneRenderer, 'SCNSceneRenderer')
_ClassList.registerClass(SCNSceneRendererDelegate, 'SCNSceneRendererDelegate')
_ClassList.registerClass(SCNSceneSource, 'SCNSceneSource')
_ClassList.registerClass(SCNSceneSourceStatus, 'SCNSceneSourceStatus')
_ClassList.registerClass(SCNSceneSourceStatusHandler, 'SCNSceneSourceStatusHandler')
_ClassList.registerClass(SCNShadable, 'SCNShadable')
_ClassList.registerClass(SCNShadableHelper, 'SCNShadableHelper')
_ClassList.registerClass(SCNShaderModifierEntryPoint, 'SCNShaderModifierEntryPoint')
_ClassList.registerClass(SCNShadowMode, 'SCNShadowMode')
_ClassList.registerClass(SCNShape, 'SCNShape')
_ClassList.registerClass(SCNSkinner, 'SCNSkinner')
_ClassList.registerClass(SCNSphere, 'SCNSphere')
_ClassList.registerClass(SCNTechnique, 'SCNTechnique')
_ClassList.registerClass(SCNTechniqueSupport, 'SCNTechniqueSupport')
_ClassList.registerClass(SCNTessellationSmoothingMode, 'SCNTessellationSmoothingMode')
_ClassList.registerClass(SCNText, 'SCNText')
_ClassList.registerClass(SCNTimingFunction, 'SCNTimingFunction')
_ClassList.registerClass(SCNTorus, 'SCNTorus')
_ClassList.registerClass(SCNTransaction, 'SCNTransaction')
_ClassList.registerClass(SCNTransformConstraint, 'SCNTransformConstraint')
_ClassList.registerClass(SCNTransparencyMode, 'SCNTransparencyMode')
_ClassList.registerClass(SCNTube, 'SCNTube')
_ClassList.registerClass(SCNVector3, 'SCNVector3')
_ClassList.registerClass(SCNVector3EqualToVector3, 'SCNVector3EqualToVector3')
_ClassList.registerClass(SCNVector3FromFloat3, 'SCNVector3FromFloat3')
_ClassList.registerClass(SCNVector3FromGLKVector3, 'SCNVector3FromGLKVector3')
_ClassList.registerClass(SCNVector3Make, 'SCNVector3Make')
_ClassList.registerClass(SCNVector3ToFloat3, 'SCNVector3ToFloat3')
_ClassList.registerClass(SCNVector3ToGLKVector3, 'SCNVector3ToGLKVector3')
_ClassList.registerClass(SCNVector3Zero, 'SCNVector3Zero')
_ClassList.registerClass(SCNVector4, 'SCNVector4')
_ClassList.registerClass(SCNVector4EqualToVector4, 'SCNVector4EqualToVector4')
_ClassList.registerClass(SCNVector4FromFloat4, 'SCNVector4FromFloat4')
_ClassList.registerClass(SCNVector4FromGLKVector4, 'SCNVector4FromGLKVector4')
_ClassList.registerClass(SCNVector4Make, 'SCNVector4Make')
_ClassList.registerClass(SCNVector4ToFloat4, 'SCNVector4ToFloat4')
_ClassList.registerClass(SCNVector4ToGLKVector4, 'SCNVector4ToGLKVector4')
_ClassList.registerClass(SCNView, 'SCNView')
_ClassList.registerClass(SCNWrapMode, 'SCNWrapMode')
_ClassList.registerClass(SKAction, 'SKAction')
_ClassList.registerClass(SKActionTimingMode, 'SKActionTimingMode')
_ClassList.registerClass(SKBlendMode, 'SKBlendMode')
_ClassList.registerClass(SKColor, 'SKColor')
_ClassList.registerClass(SKEffectNode, 'SKEffectNode')
_ClassList.registerClass(SKFade, 'SKFade')
_ClassList.registerClass(SKGroup, 'SKGroup')
_ClassList.registerClass(SKLabelHorizontalAlignmentMode, 'SKLabelHorizontalAlignmentMode')
_ClassList.registerClass(SKLabelNode, 'SKLabelNode')
_ClassList.registerClass(SKLabelVerticalAlignmentMode, 'SKLabelVerticalAlignmentMode')
_ClassList.registerClass(SKNode, 'SKNode')
_ClassList.registerClass(SKRepeat, 'SKRepeat')
_ClassList.registerClass(SKScale, 'SKScale')
_ClassList.registerClass(SKScene, 'SKScene')
_ClassList.registerClass(SKSceneScaleMode, 'SKSceneScaleMode')
_ClassList.registerClass(SKSequence, 'SKSequence')
_ClassList.registerClass(SKShapeNode, 'SKShapeNode')
_ClassList.registerClass(SKSpriteNode, 'SKSpriteNode')
_ClassList.registerClass(SKTexture, 'SKTexture')
_ClassList.registerClass(SKTextureFilteringMode, 'SKTextureFilteringMode')
_ClassList.registerClass(SKWait, 'SKWait')

/*global exports*/
exports.NSColor = NSColor
exports.NSColorSpaceModel = NSColorSpaceModel
exports.AVAudioMixerNode = AVAudioMixerNode
exports.AVAudioNode = AVAudioNode
exports.CFAbsoluteTimeGetCurrent = CFAbsoluteTimeGetCurrent
exports.CGBlendMode = CGBlendMode
exports.CGLineCap = CGLineCap
exports.CGLineJoin = CGLineJoin
exports.CGMutablePath = CGMutablePath
exports.CGPath = CGPath
exports.CGPathApplierFunction = CGPathApplierFunction
exports.CGPathFillRule = CGPathFillRule
exports.CGPoint = CGPoint
exports.CGRect = CGRect
exports.CGSize = CGSize
exports.CGVector = CGVector
exports.DispatchObject = DispatchObject
exports.DispatchQueue = DispatchQueue
exports.DispatchTime = DispatchTime
exports.DispatchTimeInterval = DispatchTimeInterval
exports.NotificationCenter = NotificationCenter
exports.NSArray = NSArray
exports.NSCoder = NSCoder
exports.NSColorSpace = NSColorSpace
exports.NSData = NSData
exports.NSDictionary = NSDictionary
exports.NSKeyedArchiver = NSKeyedArchiver
exports.NSKeyedUnarchiver = NSKeyedUnarchiver
exports.NSMutableArray = NSMutableArray
exports.NSMutableData = NSMutableData
exports.NSMutableDictionary = NSMutableDictionary
exports.NSNotification = NSNotification
exports.NSURL = NSURL
exports.NSValue = NSValue
exports.GCController = GCController
exports.GCControllerAxisInput = GCControllerAxisInput
exports.GCControllerButtonInput = GCControllerButtonInput
exports.GCControllerDirectionPad = GCControllerDirectionPad
exports.GCControllerElement = GCControllerElement
exports.GCExtendedGamepad = GCExtendedGamepad
exports.GCGamepad = GCGamepad
exports.GCMicroGamepad = GCMicroGamepad
exports.GKAgent = GKAgent
exports.GKAgent2D = GKAgent2D
exports.GKAgentDelegate = GKAgentDelegate
exports.GKBehavior = GKBehavior
exports.GKComponent = GKComponent
exports.GKEntity = GKEntity
exports.GKGoal = GKGoal
exports.GKPath = GKPath
exports.GKScene = GKScene
exports.GKSCNNodeComponent = GKSCNNodeComponent
exports.MTLTessellationPartitionMode = MTLTessellationPartitionMode
exports.NSObject = NSObject
exports.CAAction = CAAction
exports.CAAnimation = CAAnimation
exports.CAAnimationDelegate = CAAnimationDelegate
exports.CAAnimationGroup = CAAnimationGroup
exports.CABasicAnimation = CABasicAnimation
exports.CACurrentMediaTime = CACurrentMediaTime
exports.CAKeyframeAnimation = CAKeyframeAnimation
exports.CAMediaTiming = CAMediaTiming
exports.CAMediaTimingFunction = CAMediaTimingFunction
exports.CAPropertyAnimation = CAPropertyAnimation
exports.CATransform3D = CATransform3D
exports._SCNDefaultFragmentShader = _SCNDefaultFragmentShader
exports._SCNDefaultHitTestFragmentShader = _SCNDefaultHitTestFragmentShader
exports._SCNDefaultHitTestVertexShader = _SCNDefaultHitTestVertexShader
exports._SCNDefaultParticleFragmentShader = _SCNDefaultParticleFragmentShader
exports._SCNDefaultParticleVertexShader = _SCNDefaultParticleVertexShader
exports._SCNDefaultPBRFragmentShader = _SCNDefaultPBRFragmentShader
exports._SCNDefaultShadowFragmentShader = _SCNDefaultShadowFragmentShader
exports._SCNDefaultShadowVertexShader = _SCNDefaultShadowVertexShader
exports._SCNDefaultVertexShader = _SCNDefaultVertexShader
exports.SCNAccelerationConstraint = SCNAccelerationConstraint
exports.SCNAction = SCNAction
exports.SCNActionable = SCNActionable
exports.SCNActionCustom = SCNActionCustom
exports.SCNActionFade = SCNActionFade
exports.SCNActionGroup = SCNActionGroup
exports.SCNActionHide = SCNActionHide
exports.SCNActionJavaScript = SCNActionJavaScript
exports.SCNActionMove = SCNActionMove
exports.SCNActionPerformSelector = SCNActionPerformSelector
exports.SCNActionPlaySound = SCNActionPlaySound
exports.SCNActionReference = SCNActionReference
exports.SCNActionRemove = SCNActionRemove
exports.SCNActionRepeat = SCNActionRepeat
exports.SCNActionRotate = SCNActionRotate
exports.SCNActionRunAction = SCNActionRunAction
exports.SCNActionRunBlock = SCNActionRunBlock
exports.SCNActionScale = SCNActionScale
exports.SCNActionSequence = SCNActionSequence
exports.SCNActionTimingFunction = SCNActionTimingFunction
exports.SCNActionTimingMode = SCNActionTimingMode
exports.SCNActionWait = SCNActionWait
exports.SCNAnimatable = SCNAnimatable
exports.SCNAnimation = SCNAnimation
exports.SCNAnimationEvent = SCNAnimationEvent
exports.SCNAnimationEventBlock = SCNAnimationEventBlock
exports.SCNAnimationPlayer = SCNAnimationPlayer
exports.SCNAntialiasingMode = SCNAntialiasingMode
exports.SCNAudioPlayer = SCNAudioPlayer
exports.SCNAudioSource = SCNAudioSource
exports.SCNBillboardAxis = SCNBillboardAxis
exports.SCNBillboardConstraint = SCNBillboardConstraint
exports.SCNBindingBlock = SCNBindingBlock
exports.SCNBlendMode = SCNBlendMode
exports.SCNBoundingVolume = SCNBoundingVolume
exports.SCNBox = SCNBox
exports.SCNBufferBindingBlock = SCNBufferBindingBlock
exports.SCNBufferFrequency = SCNBufferFrequency
exports.SCNBufferStream = SCNBufferStream
exports.SCNCamera = SCNCamera
exports.SCNCameraProjectionDirection = SCNCameraProjectionDirection
exports.SCNCapsule = SCNCapsule
exports.SCNChamferMode = SCNChamferMode
exports.SCNColorMask = SCNColorMask
exports.SCNCone = SCNCone
exports.SCNConstraint = SCNConstraint
exports.SCNCullMode = SCNCullMode
exports.SCNCylinder = SCNCylinder
exports.SCNDebugOptions = SCNDebugOptions
exports.SCNDistanceConstraint = SCNDistanceConstraint
exports.SCNFieldForceEvaluator = SCNFieldForceEvaluator
exports.SCNFillMode = SCNFillMode
exports.SCNFilterMode = SCNFilterMode
exports.SCNFloor = SCNFloor
exports.SCNGeometry = SCNGeometry
exports.SCNGeometryElement = SCNGeometryElement
exports.SCNGeometryPrimitiveType = SCNGeometryPrimitiveType
exports.SCNGeometrySource = SCNGeometrySource
exports.SCNGeometryTessellator = SCNGeometryTessellator
exports.SCNHitTestOption = SCNHitTestOption
exports.SCNHitTestResult = SCNHitTestResult
exports.SCNIKConstraint = SCNIKConstraint
exports.SCNLayer = SCNLayer
exports.SCNLevelOfDetail = SCNLevelOfDetail
exports.SCNLight = SCNLight
exports.SCNLookAtConstraint = SCNLookAtConstraint
exports.SCNMaterial = SCNMaterial
exports.SCNMaterialProperty = SCNMaterialProperty
exports.SCNMatrix4 = SCNMatrix4
exports.SCNMatrix4EqualToMatrix4 = SCNMatrix4EqualToMatrix4
exports.SCNMatrix4FromGLKMatrix4 = SCNMatrix4FromGLKMatrix4
exports.SCNMatrix4FromMat4 = SCNMatrix4FromMat4
exports.SCNMatrix4Invert = SCNMatrix4Invert
exports.SCNMatrix4IsIdentity = SCNMatrix4IsIdentity
exports.SCNMatrix4MakeRotation = SCNMatrix4MakeRotation
exports.SCNMatrix4MakeScale = SCNMatrix4MakeScale
exports.SCNMatrix4MakeTranslation = SCNMatrix4MakeTranslation
exports.SCNMatrix4Mult = SCNMatrix4Mult
exports.SCNMatrix4Rotate = SCNMatrix4Rotate
exports.SCNMatrix4Scale = SCNMatrix4Scale
exports.SCNMatrix4ToGLKMatrix4 = SCNMatrix4ToGLKMatrix4
exports.SCNMatrix4ToMat4 = SCNMatrix4ToMat4
exports.SCNMatrix4Translate = SCNMatrix4Translate
exports.SCNMorpher = SCNMorpher
exports.SCNMorpherCalculationMode = SCNMorpherCalculationMode
exports.SCNMovabilityHint = SCNMovabilityHint
exports.SCNNode = SCNNode
exports.SCNNodeRendererDelegate = SCNNodeRendererDelegate
exports.SCNOrderedDictionary = SCNOrderedDictionary
exports.SCNParticleBirthDirection = SCNParticleBirthDirection
exports.SCNParticleBirthLocation = SCNParticleBirthLocation
exports.SCNParticleBlendMode = SCNParticleBlendMode
exports.SCNParticleEvent = SCNParticleEvent
exports.SCNParticleEventBlock = SCNParticleEventBlock
exports.SCNParticleImageSequenceAnimationMode = SCNParticleImageSequenceAnimationMode
exports.SCNParticleInputMode = SCNParticleInputMode
exports.SCNParticleModifierBlock = SCNParticleModifierBlock
exports.SCNParticleModifierStage = SCNParticleModifierStage
exports.SCNParticleOrientationMode = SCNParticleOrientationMode
exports.SCNParticlePropertyController = SCNParticlePropertyController
exports.SCNParticleSortingMode = SCNParticleSortingMode
exports.SCNParticleSystem = SCNParticleSystem
exports.SCNPhysicsBallSocketJoint = SCNPhysicsBallSocketJoint
exports.SCNPhysicsBehavior = SCNPhysicsBehavior
exports.SCNPhysicsBody = SCNPhysicsBody
exports.SCNPhysicsBodyType = SCNPhysicsBodyType
exports.SCNPhysicsCollisionCategory = SCNPhysicsCollisionCategory
exports.SCNPhysicsContact = SCNPhysicsContact
exports.SCNPhysicsContactDelegate = SCNPhysicsContactDelegate
exports.SCNPhysicsField = SCNPhysicsField
exports.SCNPhysicsFieldScope = SCNPhysicsFieldScope
exports.SCNPhysicsHingeJoint = SCNPhysicsHingeJoint
exports.SCNPhysicsNoiseField = SCNPhysicsNoiseField
exports.SCNPhysicsShape = SCNPhysicsShape
exports.SCNPhysicsSliderJoint = SCNPhysicsSliderJoint
exports.SCNPhysicsTurbulenceField = SCNPhysicsTurbulenceField
exports.SCNPhysicsVehicle = SCNPhysicsVehicle
exports.SCNPhysicsVehicleWheel = SCNPhysicsVehicleWheel
exports.SCNPhysicsWorld = SCNPhysicsWorld
exports.SCNPlane = SCNPlane
exports.SCNProgram = SCNProgram
exports.SCNProgramDelegate = SCNProgramDelegate
exports.SCNPyramid = SCNPyramid
exports.SCNQuaternion = SCNQuaternion
exports.SCNReferenceLoadingPolicy = SCNReferenceLoadingPolicy
exports.SCNReferenceNode = SCNReferenceNode
exports.SCNRenderer = SCNRenderer
exports.SCNRenderingAPI = SCNRenderingAPI
exports.SCNScene = SCNScene
exports.SCNSceneExportDelegate = SCNSceneExportDelegate
exports.SCNSceneExportProgressHandler = SCNSceneExportProgressHandler
exports.SCNSceneRenderer = SCNSceneRenderer
exports.SCNSceneRendererDelegate = SCNSceneRendererDelegate
exports.SCNSceneSource = SCNSceneSource
exports.SCNSceneSourceStatus = SCNSceneSourceStatus
exports.SCNSceneSourceStatusHandler = SCNSceneSourceStatusHandler
exports.SCNShadable = SCNShadable
exports.SCNShadableHelper = SCNShadableHelper
exports.SCNShaderModifierEntryPoint = SCNShaderModifierEntryPoint
exports.SCNShadowMode = SCNShadowMode
exports.SCNShape = SCNShape
exports.SCNSkinner = SCNSkinner
exports.SCNSphere = SCNSphere
exports.SCNTechnique = SCNTechnique
exports.SCNTechniqueSupport = SCNTechniqueSupport
exports.SCNTessellationSmoothingMode = SCNTessellationSmoothingMode
exports.SCNText = SCNText
exports.SCNTimingFunction = SCNTimingFunction
exports.SCNTorus = SCNTorus
exports.SCNTransaction = SCNTransaction
exports.SCNTransformConstraint = SCNTransformConstraint
exports.SCNTransparencyMode = SCNTransparencyMode
exports.SCNTube = SCNTube
exports.SCNVector3 = SCNVector3
exports.SCNVector3EqualToVector3 = SCNVector3EqualToVector3
exports.SCNVector3FromFloat3 = SCNVector3FromFloat3
exports.SCNVector3FromGLKVector3 = SCNVector3FromGLKVector3
exports.SCNVector3Make = SCNVector3Make
exports.SCNVector3ToFloat3 = SCNVector3ToFloat3
exports.SCNVector3ToGLKVector3 = SCNVector3ToGLKVector3
exports.SCNVector3Zero = SCNVector3Zero
exports.SCNVector4 = SCNVector4
exports.SCNVector4EqualToVector4 = SCNVector4EqualToVector4
exports.SCNVector4FromFloat4 = SCNVector4FromFloat4
exports.SCNVector4FromGLKVector4 = SCNVector4FromGLKVector4
exports.SCNVector4Make = SCNVector4Make
exports.SCNVector4ToFloat4 = SCNVector4ToFloat4
exports.SCNVector4ToGLKVector4 = SCNVector4ToGLKVector4
exports.SCNView = SCNView
exports.SCNWrapMode = SCNWrapMode
exports.SKAction = SKAction
exports.SKActionTimingMode = SKActionTimingMode
exports.SKBlendMode = SKBlendMode
exports.SKColor = SKColor
exports.SKEffectNode = SKEffectNode
exports.SKFade = SKFade
exports.SKGroup = SKGroup
exports.SKLabelHorizontalAlignmentMode = SKLabelHorizontalAlignmentMode
exports.SKLabelNode = SKLabelNode
exports.SKLabelVerticalAlignmentMode = SKLabelVerticalAlignmentMode
exports.SKNode = SKNode
exports.SKRepeat = SKRepeat
exports.SKScale = SKScale
exports.SKScene = SKScene
exports.SKSceneScaleMode = SKSceneScaleMode
exports.SKSequence = SKSequence
exports.SKShapeNode = SKShapeNode
exports.SKSpriteNode = SKSpriteNode
exports.SKTexture = SKTexture
exports.SKTextureFilteringMode = SKTextureFilteringMode
exports.SKWait = SKWait
exports._AjaxRequest = _AjaxRequest
exports._BinaryReader = _BinaryReader
exports._BinaryRequest = _BinaryRequest
exports._Buffer = _Buffer
exports._ClassList = _ClassList
exports._File = _File
exports._FileReader = _FileReader
exports._HTMLCanvasElement = _HTMLCanvasElement
exports._InstanceOf = _InstanceOf

// constants
/*global exports*/

// 
exports.kCAFillModeRemoved = 'removed'
exports.kCAFillModeForwards = 'forwards'
exports.kCAFillModeBackwards = 'backwards'
exports.kCAFillModeBoth = 'both'

// 
exports.kCAMediaTimingFunctionLinear = 'linear'
exports.kCAMediaTimingFunctionEaseIn = 'easeIn'
exports.kCAMediaTimingFunctionEaseOut = 'easeOut'
exports.kCAMediaTimingFunctionEaseInEaseOut = 'easeInEaseOut'
exports.kCAMediaTimingFunctionDefault = 'default'

// Value calculation modes
exports.kCAAnimationLinear = 'linear'
exports.kCAAnimationDiscrete = 'discrete'
exports.kCAAnimationPaced = 'paced'
exports.kCAAnimationCubic = 'cubic'
exports.kCAAnimationCubicPaced = 'cubicPaced'

// Rotation Mode Values
exports.kCAAnimationRotateAuto = 'auto'
exports.kCAAnimationRotateAutoReverse = 'autoReverse'

