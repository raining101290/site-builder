import { DropZone, type Config } from '@measured/puck';
import { BlockWrapper } from './components/BlockWrapper';
// import { Container } from './components/Container';
import Image from 'next/image';
import type { Field } from '@measured/puck';

type Props = {
    // Container: {
    //     content: any;
    //     paddingY: number;
    //     paddingX: number;
    //     backgroundColor: string;
    //     fullWidth: boolean;
    // };
    HeadingBlock: {
        title: string;
        level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        align: 'left' | 'center' | 'right';
        fontSize: number;
        textColor: string;
        backgroundColor: string;
        padding: number;
    };
    GridBlock: {
        content?: React.ComponentType<any>;
        columns: number;
        gap: number;
    };
    CardBlock: {
        title: string;
        description: string;
        variant: string;
        padding: number;
        imageSrc: string;
        imageAlt?: string;
        imageRatio: 'auto' | '1 / 1' | '3 / 2' | '2 / 3' | '16 / 9';
        imageFit: 'cover' | 'contain';
        linkUrl?: string;
    };
    ParagraphBlock: {
        description: string;
        padding: number;
        align: 'left' | 'center' | 'right';
    };
};

const ColorField: Field<string> = {
    type: 'custom',
    render: ({ value, onChange }) => (
        <input
            type="color"
            value={value || '#000000'}
            onChange={(e) => onChange(e.target.value)}
            style={{
                width: '100%',
                height: 36,
                cursor: 'pointer',
                padding: 0,
                border: 'none',
                background: 'none',
            }}
        />
    ),
};

export const config: Config<Props> = {
    components: {
        GridBlock: {
            fields: {
                content: { type: 'slot' },
                columns: {
                    type: 'select',
                    options: [
                        { label: '1 Column', value: 1 },
                        { label: '2 Columns', value: 2 },
                        { label: '3 Columns', value: 3 },
                        { label: '4 Columns', value: 4 },
                        { label: '5 Columns', value: 5 },
                        { label: '6 Columns', value: 6 },
                        { label: '7 Columns', value: 7 },
                        { label: '8 Columns', value: 8 },
                        { label: '9 Columns', value: 9 },
                        { label: '10 Columns', value: 10 },
                        { label: '11 Columns', value: 11 },
                        { label: '12 Columns', value: 12 },
                    ],
                },
                gap: { type: 'number' },
            },
            defaultProps: {
                columns: 3,
                gap: 4,
            },
            render: ({ content: Content, columns, gap }) => {
                if (!Content) return null;
                console.log('columns', columns);
                return (
                    <DropZone
                        zone="content"
                        className={`grid grid-cols-${columns} gap-${gap} pt-16 pb-8 px-4`}
                    />
                );
            },
        },
        HeadingBlock: {
            fields: {
                title: { type: 'text' },
                level: {
                    type: 'select',
                    options: [
                        { label: 'H1', value: 'h1' },
                        { label: 'H2', value: 'h2' },
                        { label: 'H3', value: 'h3' },
                        { label: 'H4', value: 'h4' },
                        { label: 'H5', value: 'h5' },
                        { label: 'H6', value: 'h6' },
                    ],
                },
                align: {
                    type: 'select',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                },
                fontSize: {
                    type: 'select',
                    options: [
                        { label: 'Small', value: 24 },
                        { label: 'Medium', value: 36 },
                        { label: 'Large', value: 48 },
                        { label: 'XL', value: 64 },
                    ],
                },
                textColor: {
                    ...ColorField,
                },
                backgroundColor: {
                    ...ColorField,
                },
                padding: { type: 'number' },
            },
            defaultProps: {
                title: 'Heading',
                level: 'h1',
                align: 'left',
                fontSize: 32,
                textColor: '#111111',
                backgroundColor: '#ffffff',
                padding: 64,
            },
            render: ({
                title,
                level,
                align,
                padding,
                fontSize,
                backgroundColor,
                textColor,
            }) => {
                const Tag = level;
                return (
                    <div
                        style={{
                            padding,
                            backgroundColor,
                        }}
                    >
                        <Tag
                            style={{
                                textAlign: align,
                                fontSize: fontSize,
                                color: textColor,
                                margin: 0,
                            }}
                        >
                            {title}
                        </Tag>
                    </div>
                );
            },
        },
        ParagraphBlock: {
            fields: {
                description: { type: 'text' },
                padding: { type: 'number' },
                align: {
                    type: 'select',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                },
            },
            defaultProps: {
                description: 'Paragraph text goes here.',
                padding: 16,
                align: 'left',
            },
            render: ({ description, padding, align }) => (
                <BlockWrapper padding={padding}>
                    <p
                        style={{
                            textAlign: align,
                            margin: '0 auto',
                        }}
                    >
                        {description}
                    </p>
                </BlockWrapper>
            ),
        },
        CardBlock: {
            fields: {
                title: { type: 'text' },
                description: { type: 'textarea' },
                padding: { type: 'number' },
                variant: {
                    type: 'select',
                    options: [
                        { label: 'Outlined', value: 'border rounded-md' },
                        { label: 'Floating', value: 'shadow-md rounded-md' },
                    ],
                },
                imageSrc: { type: 'text' },
                linkUrl: { type: 'text' },
                imageRatio: {
                    type: 'select',
                    options: [
                        { label: 'Auto', value: 'auto' },
                        { label: 'Landscape (3:2)', value: '3 / 2' },
                        { label: 'Portrait (2:3)', value: '2 / 3' },
                        { label: 'Square (1:1)', value: '1 / 1' },
                        { label: 'Wide (16:9)', value: '16 / 9' },
                    ],
                },
                imageAlt: { type: 'text' },
                imageFit: {
                    type: 'select',
                    options: [
                        { label: 'Cover (crop)', value: 'cover' },
                        { label: 'Contain (no crop)', value: 'contain' },
                    ],
                },
            },
            defaultProps: {
                title: 'Card Title',
                description: 'Card description goes here.',
                variant: 'border border-gray-300 rounded-md',
                padding: 24,
                imageSrc: '',
                imageAlt: 'Card Image',
                linkUrl: '',
                imageRatio: '3 / 2',
                imageFit: 'cover',
            },
            render: ({
                title,
                description,
                padding,
                variant,
                imageSrc,
                imageRatio,
                imageAlt,
                imageFit,
                linkUrl,
            }) => (
                <BlockWrapper className={`p-${padding} ${variant}`}>
                    {imageSrc && (
                        <div
                            className="image-wrapper"
                            style={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: imageRatio,
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: imageFit }}
                            />
                        </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {linkUrl && (
                        <a href={linkUrl} target="_blank" rel="noreferrer">
                            Learn More
                        </a>
                    )}
                </BlockWrapper>
            ),
        },
    },
};

export default config;
