import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { IEDirectives } from '@imageengine/imageengine-helpers';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

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
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
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
}, {}>;
export { Image_2 as Image }

export declare const ImageEngineProvider: DefineComponent<{
    deliveryAddress: {
        type: StringConstructor;
        required: true;
    };
    stripFromSrc: {
        type: StringConstructor;
    };
}, void, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    deliveryAddress: {
        type: StringConstructor;
        required: true;
    };
    stripFromSrc: {
        type: StringConstructor;
    };
}>>, {}, {}>;

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
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    srcSet: {
        type: () => TSrcSet;
        required: true;
    };
    attributes: {
        type: ObjectConstructor;
    };
}>>, {}, {}>;

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
