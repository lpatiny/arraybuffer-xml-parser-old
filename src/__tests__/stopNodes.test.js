/* eslint-disable no-tabs */

import { parse } from '../parse';

const encoder = new TextEncoder();

describe('XMLParser', () => {
  it('1a. should support single stopNode', () => {
    const xmlData = encoder.encode(
      `<issue><title>test 1</title><fix1><p>p 1</p><div class="show">div 1</div></fix1></issue>`,
    );
    const expected = {
      issue: {
        title: 'test 1',
        fix1: '<p>p 1</p><div class="show">div 1</div>',
      },
    };
    let result = parse(xmlData, {
      attributeNamePrefix: '',
      stopNodes: ['fix1'],
    });

    //console.log(JSON.stringify(result,null,4));
    expect(result).toStrictEqual(expected);

    // result = validator.validate(xmlData);
    // expect(result).toBe(true);
  });

  it('1b. 3. should support more than one stopNodes, with or without attr', () => {
    const xmlData = encoder.encode(
      `<issue><title>test 1</title><fix1 lang="en"><p>p 1</p><div class="show">div 1</div></fix1><fix2><p>p 2</p><div class="show">div 2</div></fix2></issue>`,
    );
    const expected = {
      issue: {
        title: 'test 1',
        fix1: {
          '#text': '<p>p 1</p><div class="show">div 1</div>',
          lang: 'en',
        },
        fix2: '<p>p 2</p><div class="show">div 2</div>',
      },
    };

    let result = parse(xmlData, {
      attributeNamePrefix: '',

      stopNodes: ['fix1', 'fix2'],
    });

    //console.log(JSON.stringify(result,null,4));
    expect(result).toStrictEqual(expected);

    // result = validator.validate(xmlData);
    // expect(result).toBe(true);
  });

  it('1c. have two stopNodes, one within the other', () => {
    const xmlData = encoder.encode(
      `<issue><title>test 1</title><fix1 lang="en"><p>p 1</p><fix2><p>p 2</p><div class="show">div 2</div></fix2><div class="show">div 1</div></fix1></issue>`,
    );
    const expected = {
      issue: {
        title: 'test 1',
        fix1: {
          '#text':
            '<p>p 1</p><fix2><p>p 2</p><div class="show">div 2</div></fix2><div class="show">div 1</div>',
          lang: 'en',
        },
      },
    };

    let result = parse(xmlData, {
      attributeNamePrefix: '',

      stopNodes: ['fix1', 'fix2'],
    });

    //console.log(JSON.stringify(result,null,4));
    expect(result).toStrictEqual(expected);

    // result = validator.validate(xmlData);
    // expect(result).toBe(true);
  });

  it('2a. stop node has nothing in it', () => {
    const xmlData = encoder.encode(
      `<issue><title>test 1</title><fix1></fix1></issue>`,
    );
    const expected = {
      issue: {
        title: 'test 1',
        fix1: '',
      },
    };

    let result = parse(xmlData, {
      attributeNamePrefix: '',

      stopNodes: ['fix1', 'fix2'],
    });

    //console.log(JSON.stringify(result,null,4));
    expect(result).toStrictEqual(expected);

    // result = validator.validate(xmlData);
    // expect(result).toBe(true);
  });

  it('2b. stop node is self-closing', () => {
    const xmlData = encoder.encode(
      `<issue><title>test 1</title><fix1/></issue>`,
    );
    const expected = {
      issue: {
        title: 'test 1',
        fix1: '',
      },
    };

    let result = parse(xmlData, {
      attributeNamePrefix: '',

      stopNodes: ['fix1', 'fix2'],
    });

    //console.log(JSON.stringify(result,null,4));
    expect(result).toStrictEqual(expected);

    // result = validator.validate(xmlData);
    // expect(result).toBe(true);
  });

  it('4. cdata', () => {
    const xmlData = encoder.encode(`<?xml version='1.0'?>
<issue>
    <fix1>
        <phone>+122233344550</phone>
        <fix2><![CDATA[<fix1>Jack</fix1>]]><![CDATA[Jack]]></fix2>
        <name><![CDATA[<some>Mohan</some>]]></name>
        <blank><![CDATA[]]></blank>
        <regx><![CDATA[^[ ].*$]]></regx>
    </fix1>
    <fix2>
		<![CDATA[<some>Mohan</some>]]>
	</fix2>
</issue>`);
    const expected = {
      issue: {
        fix1: '\n        <phone>+122233344550</phone>\n        <fix2><![CDATA[<fix1>Jack</fix1>]]><![CDATA[Jack]]></fix2>\n        <name><![CDATA[<some>Mohan</some>]]></name>\n        <blank><![CDATA[]]></blank>\n        <regx><![CDATA[^[ ].*$]]></regx>\n    ',
        fix2: '\n\t\t<![CDATA[<some>Mohan</some>]]>\n\t',
      },
    };

    let result = parse(xmlData, {
      attributeNamePrefix: '',

      stopNodes: ['fix1', 'fix2'],
    });

    //console.log(JSON.stringify(result,null,4));
    expect(result).toStrictEqual(expected);

    // result = validator.validate(xmlData, {
    //   allowBooleanAttributes: true,
    // });
    // expect(result).toBe(true);
  });

  it('5. stopNode at root level', () => {
    const xmlData = encoder.encode(
      `<fix1><p>p 1</p><div class="show">div 1</div></fix1>`,
    );
    const expected = {
      fix1: '<p>p 1</p><div class="show">div 1</div>',
    };

    let result = parse(xmlData, {
      attributeNamePrefix: '',

      stopNodes: ['fix1', 'fix2'],
    });

    //console.log(JSON.stringify(result,null,4));
    expect(result).toStrictEqual(expected);

    // result = validator.validate(xmlData, {
    //   allowBooleanAttributes: true,
    // });
    // expect(result).toBe(true);
  });
});
