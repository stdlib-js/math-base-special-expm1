/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_high_word.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include "stdlib/constants/float64/half_ln_two.h"
#include <stdint.h>

static const double OVERFLOW_THRESHOLD = 7.09782712893383973096e+02; // 0x40862E42 0xFEFA39EF

// High and low words of ln(2):
static const double LN2_HI = 6.93147180369123816490e-01; // 0x3FE62E42 0xFEE00000
static const double LN2_LO = 1.90821492927058770002e-10; // 0x3DEA39EF 0x35793C76

// 1 / ln(2):
static const double LN2_INV = 1.44269504088896338700e+00; // 0x3FF71547 0x652B82FE

// ln(2) * 56:
static const double LN2x56 = 3.88162421113569373274e+01; // 0x4043687A 0x9F1AF2B1

// ln(2) * 1.5:
static const double LN2_HALFX3 = 1.03972077083991796413e+00; // 0x3FF0A2B2 0x3F3BAB73

/* Begin auto-generated functions. The following functions are auto-generated. Do not edit directly. */

// BEGIN: polyval_q

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_q( const double x ) {
	return -0.03333333333333313 + (x * (0.0015873015872548146 + (x * (-0.0000793650757867488 + (x * (0.000004008217827329362 + (x * -2.0109921818362437e-7)))))));
}

// END: polyval_q

/* End auto-generated functions. */

/**
* Computes `exp(x) - 1`.
*
* @param x    input value
* @return	  output value
*
* @example
* double v = stdlib_base_expm1( 0.0 );
* // returns 0.0
*/
double stdlib_base_expm1( const double x ) {
	double halfX;
	int sign;
	double lo;
	double hi;
	uint32_t hy;
	uint32_t hx;
	double r1;
	double xc = x;
	double y;
	double z;
	double c;
	double t;
	double e;
	int32_t k;

	if ( xc == STDLIB_CONSTANT_FLOAT64_PINF || stdlib_base_is_nan( xc ) ) {
		return xc;
	}
	if ( xc == STDLIB_CONSTANT_FLOAT64_NINF ) {
		return -1.0;
	}
	if ( xc == 0.0 ) {
		return xc; // handles +-0
	}
	// Set y = |x|:
	if ( xc < 0.0 ) {
		sign = 1;
		y = -xc;
	} else {
		sign = 0;
		y = xc;
	}
	// Filter out huge and non-finite arguments...
	if ( y >= LN2x56 ) { // if |x| >= 56*ln(2)
		if ( sign == 1 ) { // if x <= -56*ln(2)
			return -1.0;
		}
		if ( y >= OVERFLOW_THRESHOLD ) { // if |x| >= 709.78...
			return STDLIB_CONSTANT_FLOAT64_PINF;
		}
	}
	// Extract the more significant bits from |x|:
	stdlib_base_float64_get_high_word( y, &hx );

	// Argument reduction...
	if ( y > STDLIB_CONSTANT_FLOAT64_HALF_LN_TWO ) {
		if ( y < LN2_HALFX3 ) {
			if ( sign == 1 ) {
				hi = xc + LN2_HI;
				lo = -LN2_LO;
				k = -1;
			} else {
				hi = xc - LN2_HI;
				lo = LN2_LO;
				k = 1;
			}
		} else {
			if ( sign == 1 ) {
				k = ( LN2_INV * xc ) - 0.5;
			} else {
				k = ( LN2_INV * xc ) + 0.5;
			}
			t = k;
			hi = xc - ( t * LN2_HI ); // t*ln2_hi is exact here
			lo = t * LN2_LO;
		}
		xc = hi - lo;
		c = ( hi - xc ) - lo;
	}
	// If |x| < 2**-54 => high word: 0 01111001001 00000000000000000000 => 0x3c900000 = 1016070144  => exponent = 01111001001 = 969 = 1023-54
	else if ( hx < 1016070144 ) {
		return xc;
	} else {
		k = 0;
	}
	// x is now in primary range...
	halfX = 0.5 * xc;
	z = xc * halfX;

	r1 = 1.0 + ( z * polyval_q( z ) );

	t = 3.0 - ( r1 * halfX );
	e = z * ( ( r1 - t ) / ( 6.0 - ( xc * t ) ) );
	if ( k == 0 ) {
		return xc - ( ( xc * e ) - z ); // c is 0
	}
	e = ( xc * ( e - c ) ) - c;
	e -= z;
	if ( k == -1 ) {
		return ( 0.5 * ( xc - e ) ) - 0.5;
	}
	if ( k == 1 ) {
		if ( xc < -0.25 ) {
			return -2.0 * ( e - ( xc + 0.5 ) );
		}
		return 1.0 + ( 2.0 * ( xc - e ) );
	}
	if ( k <= -2 || k > 56 ) { // suffice to return exp(x)-1
		y = 1.0 - ( e - xc );

		// Add k to y's exponent:
		stdlib_base_float64_get_high_word( y, &hy );
		hy += ( k << 20 );
		stdlib_base_float64_set_high_word( hy, &y );

		return y - 1.0;
	}
	t = 1.0;
	if ( k < 20 ) {
		// 0x3ff00000 - (0x200000>>k) = 1072693248 - (0x200000>>k) => 0x200000 = 0 00000000010 00000000000000000000
		hy = 1072693248 - ( 0x200000 >> k );
		stdlib_base_float64_set_high_word( hy, &t ); // t=1-2^-k
		y = t - ( e - xc );
	} else {
		hy = ( ( STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS - k ) << 20 );
		stdlib_base_float64_set_high_word( hy, &t ); // t=2^-k
		y = xc - ( e + t );
		y += 1.0;
	}
	// Add k to y's exponent:
	stdlib_base_float64_get_high_word( y, &hy );
	hy += ( k << 20 );
	stdlib_base_float64_set_high_word( hy, &y );
	return y;
}
