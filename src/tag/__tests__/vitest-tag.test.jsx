/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 该文件由脚本自动生成，如需修改请联系 PMC
 * This file generated by scripts of tdesign-api. `npm run api:docs Tag React(PC) vitest,finalProject`
 * If you need to modify this file, contact PMC first please.
 */
import React from 'react';
import { fireEvent, vi, render } from '@test/utils';
import { Tag, CheckTag } from '..';

describe('Tag Component', () => {
  it('props.children works fine', () => {
    const { container } = render(
      <Tag>
        <span className="custom-node">TNode</span>
      </Tag>,
    );
    expect(container.querySelector('.custom-node')).toBeTruthy();
  });

  it('props.closable: Tag contains element `.t-tag__icon-close`', () => {
    // closable default value is false
    const { container } = render(<Tag></Tag>);
    expect(container.querySelector('.t-tag__icon-close')).toBeFalsy();
    // closable = false
    const { container: container1 } = render(<Tag closable={false}></Tag>);
    expect(container1.querySelector('.t-tag__icon-close')).toBeFalsy();
    // closable = true
    const { container: container2 } = render(<Tag closable={true}></Tag>);
    expect(container2.querySelector('.t-tag__icon-close')).toBeTruthy();
  });

  it('props.content works fine', () => {
    const { container } = render(<Tag content={<span className="custom-node">TNode</span>}></Tag>);
    expect(container.querySelector('.custom-node')).toBeTruthy();
  });

  it('props.disabled: hide closeIcon if tag is disabled, and not trigger click event', () => {
    const onClickFn = vi.fn();
    const { container } = render(<Tag disabled={true} closable={true} onClick={onClickFn}></Tag>);
    fireEvent.click(container.firstChild);
    expect(container.querySelector('.t-tag__icon-close')).toBeFalsy();
    expect(onClickFn).not.toHaveBeenCalled();
  });

  it('props.icon works fine', () => {
    const { container } = render(<Tag icon={<span className="custom-node">TNode</span>}></Tag>);
    expect(container.querySelector('.custom-node')).toBeTruthy();
  });

  it(`props.maxWidth is equal to 150px`, () => {
    const { container } = render(<Tag maxWidth={'150px'} content={'This is a long long long long long tag'}></Tag>);
    const domWrapper = container.firstChild;
    expect(domWrapper.style.maxWidth).toBe('150px');
    const domWrapper1 = container.querySelector('.t-tag--text');
    expect(domWrapper1.getAttribute('title')).toBe('This is a long long long long long tag');
  });

  const shapeClassNameList = [{ 't-tag--square': false }, 't-tag--round', 't-tag--mark'];
  ['square', 'round', 'mark'].forEach((item, index) => {
    it(`props.shape is equal to ${item}`, () => {
      const { container } = render(<Tag shape={item}></Tag>);
      if (typeof shapeClassNameList[index] === 'string') {
        expect(container.firstChild).toHaveClass(shapeClassNameList[index]);
      } else if (typeof shapeClassNameList[index] === 'object') {
        const classNameKey = Object.keys(shapeClassNameList[index])[0];
        expect(container.querySelector(`.${classNameKey}`)).toBeFalsy();
      }
    });
  });

  const sizeClassNameList = ['t-size-s', { 't-size-m': false }, 't-size-l'];
  ['small', 'medium', 'large'].forEach((item, index) => {
    it(`props.size is equal to ${item}`, () => {
      const { container } = render(<Tag size={item}></Tag>);
      if (typeof sizeClassNameList[index] === 'string') {
        expect(container.firstChild).toHaveClass(sizeClassNameList[index]);
      } else if (typeof sizeClassNameList[index] === 'object') {
        const classNameKey = Object.keys(sizeClassNameList[index])[0];
        expect(container.querySelector(`.${classNameKey}`)).toBeFalsy();
      }
    });
  });

  ['default', 'primary', 'warning', 'danger', 'success'].forEach((item) => {
    it(`props.theme is equal to ${item}`, () => {
      const { container } = render(<Tag theme={item}></Tag>);
      expect(container.firstChild).toHaveClass(`t-tag--${item}`);
    });
  });

  ['dark', 'light', 'outline', 'light-outline'].forEach((item) => {
    it(`props.variant is equal to ${item}`, () => {
      const { container } = render(<Tag variant={item}></Tag>);
      expect(container.firstChild).toHaveClass(`t-tag--${item}`);
    });
  });

  it('events.click works fine', () => {
    const fn = vi.fn();
    const { container } = render(<Tag onClick={fn}></Tag>);
    fireEvent.click(container.firstChild);
    expect(fn).toHaveBeenCalled();
    expect(fn.mock.calls[0][0].e.type).toBe('click');
  });

  it('events.close works fine', () => {
    const onCloseFn = vi.fn();
    const { container } = render(<Tag closable={true} onClose={onCloseFn}></Tag>);
    fireEvent.click(container.querySelector('.t-tag__icon-close'));
    expect(onCloseFn).toHaveBeenCalled();
    expect(onCloseFn.mock.calls[0][0].e.type).toBe('click');
  });
});

describe('CheckTag Component', () => {
  it('props.children works fine', () => {
    const { container } = render(
      <CheckTag>
        <span className="custom-node">TNode</span>
      </CheckTag>,
    );
    expect(container.querySelector('.custom-node')).toBeTruthy();
  });

  it('props.content works fine', () => {
    const { container } = render(<CheckTag content={<span className="custom-node">TNode</span>}></CheckTag>);
    expect(container.querySelector('.custom-node')).toBeTruthy();
  });
});
