import type { AllowedComponentProps } from 'vue';
import type { ComponentCustomProps } from 'vue';
import type { ComponentOptionsMixin } from 'vue';
import type { DefineComponent } from 'vue';
import type { ExtractPropTypes } from 'vue';
import { IEDirectives } from '@imageengine/imageengine-helpers';
import type { Ref } from 'vue';
import type { VNodeProps } from 'vue';

declare const Image_2: DefineComponent<{
    src: {
        type: StringConstructor;
        required: true;
    };
    directives: {
        type: () => IEDirectives;
        default: null;
    };
    srcSet: {
        type: () => TSrcSet;
        default: null;
    };
    attributes: {
        type: ObjectConstructor;
    };
}, {
    count: Ref<number>;
    deliveryAddress: string;
    stripFromSrc: string;
}, unknown, {
    computedDirectives(): string;
    srcString(): string;
    srcSetString(): string;
    imageUrl(): string;
    imageExtension(): string;
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    directives: {
        type: () => IEDirectives;
        default: null;
    };
    srcSet: {
        type: () => TSrcSet;
        default: null;
    };
    attributes: {
        type: ObjectConstructor;
    };
}>>, {
    directives: IEDirectives;
    srcSet: TSrcSet;
}>;
export { Image_2 as Image }

export declare const ImageEngineProvider: DefineComponent<{
    deliveryAddress: {
        type: StringConstructor;
        required: true;
    };
    stripFromSrc: {
        type: StringConstructor;
    };
}, void, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    deliveryAddress: {
        type: StringConstructor;
        required: true;
    };
    stripFromSrc: {
        type: StringConstructor;
    };
}>>, {}>;

export declare const Source: DefineComponent<{
    srcSet: {
        type: () => TSrcSet;
        required: true;
    };
    attributes: {
        type: ObjectConstructor;
    };
}, {
    count: Ref<number>;
    deliveryAddress: string;
    stripFromSrc: string;
}, unknown, {
    srcSetString(): String;
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    srcSet: {
        type: () => TSrcSet;
        required: true;
    };
    attributes: {
        type: ObjectConstructor;
    };
}>>, {}>;

declare type TSrcSet = Array<{
    src: string;
    width: string;
    directives?: IEDirectives;
}>;

export declare interface User {
    id: string;
    name: string;
}

export { }
