import { Context } from "./context";

type Align = 'bottom' | 'center' | 'end' | 'left' | 'right' | 'start' | 'top' | number;
type Anchor = 'center' | 'end' | 'start';
type Color = string | CanvasGradient | CanvasPattern;
type Listener = (context: Context) => boolean | void;
type TextAlign = 'left' | 'right' | 'start' | 'center' | 'end';

type Font = {
	family?: string,
	lineHeight?: string | number,
	size?: number,
	style?: 'normal' | 'italic' | 'oblique',
	weight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number
};

type Padding = number | {
	top?: number,
	right?: number,
	bottom?: number,
	left?: number
};

// Generic types
type Indexable<T> = T | T[];
type Scriptable<T> = T | ((context: Context) => T);

interface LabelOptions {
	/**
	 * The label box alignment relative to `anchor` that can be expressed either
	 * by a number representing the clockwise angle (in degree) or a by one of
	 * the following string presets:
	 *
	 * - `'start'`: before the anchor point, following the same direction
	 * - `'end'`: after the anchor point, following the same direction
	 * - `'center'`: centered on the anchor point
	 * - `'right'`: 0°
	 * - `'bottom'`: 90°
	 * - `'left'`: 180°
	 * - `'top'`: 270°
	 *
	 * @default 'center'
	 * @since 0.1.0
	 */
	align?: Indexable<Align> | Scriptable<Align>,

	/**
	 * The label box alignment relative to the element:
	 *
	 * - `'center'`
	 * - `'end'`
	 * - `'start'`
	 *
	 * @default 'center'
	 * @since 0.1.0
	 */
	anchor?: Indexable<Anchor> | Scriptable<Anchor>,

	/**
	 * The color used to draw the background of the surrounding frame.
	 * @default null (no background)
	 * @since 0.1.0
	 */
	backgroundColor?: Indexable<Color | null> | Scriptable<Color | null>,

	/**
	 * The color used to draw the border of the surrounding frame.
	 * @default null (no border)
	 * @since 0.1.0
	 */
	borderColor?: Indexable<Color | null> | Scriptable<Color | null>,

	/**
	 * The border radius used to add rounded corners to the surrounding frame.
	 * @default 0 (not rounded)
	 * @since 0.1.0
	 */
	borderRadius?: Indexable<number> | Scriptable<number>,

	/**
	 * The border width of the surrounding frame.
	 * @default 0 (no border)
	 * @since 0.1.0
	 */
	borderWidth?: Indexable<number> | Scriptable<number>,

	/**
	 * When `true`, the anchor position is calculated based on the visible
	 * geometry of the associated element (i.e. part inside the chart area).
	 * @default false (no clamping)
	 * @since 0.5.0
	 */
	clamp?: Indexable<boolean> | Scriptable<boolean>,

	/**
	 * Clip the label drawing to the chart area.
	 * @default false (no clipping)
	 * @since 0.4.0
	 */
	clip?: Indexable<boolean> | Scriptable<boolean>,

	/**
	 * The color used to draw the label text.
	 * @default undefined (Chart.defaults.global.defaultFontColor)
	 * @since 0.1.0
	 */
	color?: Indexable<Color> | Scriptable<Color>,

	/**
	 * When `false`, the label is hidden and associated options are not
	 * calculated, else if `true`, the label is drawn. If `auto`, the
	 * label is automatically hidden if it appears under another label.
	 * @default true
	 * @since 0.1.0 (boolean), 0.5.0 ('auto')
	 */
	display?: Indexable<boolean | string> | Scriptable<boolean | string>,

	/**
	 * The font options used to draw the label text.
	 * @default Chart.defaults.global.defaultFont.*
	 * @since 0.1.0
	 */
	font?: Indexable<Font> | Scriptable<Font>,

	/**
	 * Allows to customize the label text by transforming input data.
	 * @default data[index] // parsed as string
	 * @since 0.1.0
	 */
	formatter?: ((value: any, context: Context) => any | null),

	/**
	 * Event listeners, where the property is the type of the event to listen
	 * and the value a callback with a unique `context` argument containing
	 * the same information as for scriptable options. If a callback explicitly
	 * returns `true`, the label is updated with the current context and the
	 * chart re-rendered. This allows to implement visual interactions with
	 * labels such as highlight, selection, etc.
	 * @default {}
	 * @since 0.3.0
	 */
	listeners?: {
		/**
		 * Called when a mouse click is detected within a label.
		 * @since 0.3.0
		 */
		click?: Listener,

		/**
		 * Called when the mouse enters a label.
		 * @since 0.3.0
		 */
		enter?: Listener,

		/**
		 * Called when the mouse leaves a label.
		 * @since 0.3.0
		 */
		leave?: Listener
	},

	/**
	 * The distance (in pixels) to pull the label away from the anchor point,
	 * the direction being determined by the `align` value (only applicable
	 * if `align` is `start` or `end`).
	 * @default 4
	 * @since 0.1.0
	 */
	offset?: Indexable<number> | Scriptable<number>,

	/**
	 * The label global opacity, including text, background, borders, etc.,
	 * specified as a number between 0.0 (fully transparent) and 1.0 (fully opaque).
	 * @default 1
	 * @since 0.1.0
	 */
	opacity?: Indexable<number> | Scriptable<number>,

	/**
	 * The padding (in pixels) to apply between the text and the surrounding frame.
	 * @default 4 (all values)
	 * @since 0.1.0
	 */
	padding?: Indexable<Padding> | Scriptable<Padding>,

	/**
	 * Clockwise rotation of the label relative to its center.
	 * @default 0
	 * @since 0.1.0
	 */
	rotation?: Indexable<number> | Scriptable<number>,

	/**
	 * Text alignment for multi-lines labels.
	 * @default 'start'
	 * @since 0.1.0
	 */
	textAlign?: Indexable<TextAlign> | Scriptable<TextAlign>,

	/**
	 * The stroke color used to draw the label text. If this options is
	 * not set (default), the value of the `color` option will be used.
	 * @default color
	 * @since 0.5.0
	 */
	textStrokeColor?: Indexable<Color> | Scriptable<Color>,

	/**
	 * The width of the stroke for the label text.
	 * @default 0 (no stroke)
	 * @since 0.5.0
	 */
	textStrokeWidth?: Indexable<number> | Scriptable<number>,

	/**
	 * The amount of blur applied to shadow under the label text.
	 * @default 0 (no shadow)
	 * @since 0.5.0
	 */
	textShadowBlur?: Indexable<number> | Scriptable<number>,

	/**
	 * The color of the shadow under the label text.
	 * @default color
	 * @since 0.5.0
	 */
	textShadowColor?: Indexable<Color> | Scriptable<Color>
}

export interface Options extends LabelOptions {
	/**
	 * Multi-labels definition object where each property represents a new
	 * label, the key being the label key and the value being the options
	 * specific to each label and merged on top of the root options.
	 * @default undefined
	 * @since 0.7.0
	 */
	labels?: {
		[key: string]: LabelOptions | null
	}
}
